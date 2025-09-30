// app/api/adverse-reaction/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        // Форма приходит как multipart/form-data
        const fd = await req.formData();

        // Хелперы
        const get = (k: string) => (fd.get(k) ?? '') as string;
        const photo = (fd.get('photo') as File) || null;

        // Поля формы
        const date = get('date');
        const reporterType = get('reporterType');
        const reporterName = get('reporterName');
        const reporterPhone = get('reporterPhone');
        const reporterEmail = get('reporterEmail');

        const batchNumber = get('batchNumber');
        const purchasePlace = get('purchasePlace');
        const purchaseDate = get('purchaseDate');
        const productionDate = get('productionDate'); // было в форме — добавили на сервер

        const dose = get('dose');
        const administrationRoute = get('administrationRoute');
        const duration = get('duration');
        const manipulationPlace = get('manipulationPlace');

        const animalSpecies = get('animalSpecies');
        const animalAge = get('animalAge');
        const animalWeight = get('animalWeight');
        const animalSex = get('animalSex');

        const medicalHistory = get('medicalHistory');
        const concomitantTherapy = get('concomitantTherapy');
        const reactionDescription = get('reactionDescription');
        const reactionDate = get('reactionDate');

        // Письмо (экранируем ввод, чтобы не ломать HTML)
        const html = `
      <h2 style="color:#000 !important">Зарегистрирован случай нежелательной реакции на ВЕЗОТИЛ</h2>
      <p style="color:#000 !important"><b>Дата заполнения отчета:</b> ${esc(date)}</p>
      <p style="color:#000 !important"><b>Кто сообщает:</b> ${esc(reporterType)}</p>

      <br>
      <h3 style="color:#000 !important">Контактные данные заявителя</h3>
      <p style="color:#000 !important"><b>ФИО:</b> ${esc(reporterName)}</p>
      <p style="color:#000 !important"><b>Телефон:</b> ${esc(reporterPhone)}</p>
      <p style="color:#000 !important"><b>Email:</b> <a href="mailto:${escAttr(reporterEmail)}">${esc(
            reporterEmail
        )}</a></p>

      <br>
      <h3 style="color:#000 !important">Информация о препарате</h3>
      <p style="color:#000 !important"><b>Номер серии:</b> ${esc(batchNumber)}</p>
      <p style="color:#000 !important"><b>Место приобретения:</b> ${esc(purchasePlace)}</p>
      <p style="color:#000 !important"><b>Дата приобретения:</b> ${esc(purchaseDate)}</p>
      <p style="color:#000 !important"><b>Дата изготовления:</b> ${esc(productionDate)}</p>

      <br>
      <h3 style="color:#000 !important">Применение препарата</h3>
      <p style="color:#000 !important"><b>Доза:</b> ${esc(dose)}</p>
      <p style="color:#000 !important"><b>Способ введения:</b> ${esc(administrationRoute)}</p>
      <p style="color:#000 !important"><b>Продолжительность:</b> ${esc(duration)}</p>
      <p style="color:#000 !important"><b>Место проведения манипуляции:</b> ${esc(manipulationPlace)}</p>

      <br>
      <h3 style="color:#000 !important">Сведения о животном</h3>
      <p style="color:#000 !important"><b>Вид:</b> ${esc(animalSpecies)}</p>
      <p style="color:#000 !important"><b>Возраст:</b> ${esc(animalAge)}</p>
      <p style="color:#000 !important"><b>Вес:</b> ${esc(animalWeight)}</p>
      <p style="color:#000 !important"><b>Пол:</b> ${esc(animalSex)}</p>

      <p style="color:#000 !important"><b>Сопутствующие заболевания (анамнез):</b></p>
      <div style="white-space:pre-wrap;color:#000 !important">${esc(medicalHistory)}</div>

      <p style="color:#000 !important"><b>Сопутствующая терапия:</b></p>
      <div style="white-space:pre-wrap;color:#000 !important">${esc(concomitantTherapy)}</div>

      <p style="color:#000 !important"><b>Описание нежелательной реакции:</b></p>
      <div style="white-space:pre-wrap;color:#000 !important">${esc(reactionDescription)}</div>

      <p style="color:#000 !important"><b>Дата возникновения нежелательной реакции:</b> ${esc(reactionDate)}</p>
    `;

        // Транспорт
        const port = Number(process.env.REACTION_PORT) || 465;
        const transporter = nodemailer.createTransport({
            host: process.env.REACTION_HOST,
            port,
            secure: port === 465, // true для 465, false для 587/25
            auth: {
                user: process.env.REACTION_USER,
                pass: process.env.REACTION_PASS,
            },
        });

        // Письмо + вложение (если есть)
        const mailOptions: any = {
            from: `"ВЕЗОТИЛ" <${process.env.REACTION_USER}>`,
            to: process.env.REACTION_TO,
            subject: 'ВЕЗОТИЛ | Нежелательная реакция',
            html,
            replyTo: reporterEmail || undefined,
        };

        if (photo) {
            const bytes = await photo.arrayBuffer();
            mailOptions.attachments = [
                {
                    filename: photo.name || 'photo.jpg',
                    content: Buffer.from(bytes),
                    contentType: photo.type || 'image/*',
                },
            ];
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Ошибка при отправке отчёта:', error);
        return NextResponse.json({ success: false, error: 'Ошибка отправки' }, { status: 500 });
    }
}

// Экранизация, чтобы пользовательский ввод не ломал HTML
function esc(s: string) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escAttr(s: string) {
    return esc(s).replace(/"/g, '&quot;');
}
