import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const {
            date,
            reporterType,
            reporterName,
            reporterPhone,
            reporterEmail,
            batchNumber,
            purchasePlace,
            purchaseDate,
            dose,
            administrationRoute,
            duration,
            animalSpecies,
            animalAge,
            animalWeight,
            animalSex,
            medicalHistory,
            concomitantTherapy,
            reactionDescription,
            reactionDate,
        } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.REACTION_HOST,
            port: Number(process.env.REACTION_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.REACTION_USER,
                pass: process.env.REACTION_PASS,
            },
        });

        await transporter.sendMail({
            from: `"ВЕЗОТИЛ" <${process.env.REACTION_USER}>`,
            to: process.env.REACTION_TO,
            subject: 'ВЕЗОТИЛ | Нежелательная реакция',
            html: `
        <h2 style="color: #000 !important">Зарегистрирован случай нежелательной реакции на ВЕЗОТИЛ</h2>
        <p style="color: #000 !important"><b>Дата заполнения отчета:</b> ${date}</p>
        <p style="color: #000 !important"><b>Кто сообщает:</b> ${reporterType}</p>
        <br>
        <h3 style="color: #000 !important">Контактные данные заявителя</h3>
        <p style="color: #000 !important"><b>ФИО:</b> ${reporterName}</p>
        <p style="color: #000 !important"><b>Телефон:</b> ${reporterPhone}</p>
        <p style="color: #000 !important"><b>Email:</b> <a href="mailto:${reporterEmail}">${reporterEmail}</a></p>
        <br>
        <h3 style="color: #000 !important">Информация о препарате</h3>
        <p style="color: #000 !important"><b>Номер серии:</b> ${batchNumber}</p>
        <p style="color: #000 !important"><b>Место приобретения:</b> ${purchasePlace}</p>
        <p style="color: #000 !important"><b>Дата приобретения:</b> ${purchaseDate}</p>
        <br>
        <h3 style="color: #000 !important">Применение препарата</h3>
        <p style="color: #000 !important"><b>Доза:</b> ${dose}</p>
        <p style="color: #000 !important"><b>Способ введения:</b> ${administrationRoute}</p>
        <p style="color: #000 !important"><b>Продолжительность:</b> ${duration}</p>
        <br>
        <h3 style="color: #000 !important">Сведения о животном</h3>
        <p style="color: #000 !important"><b>Вид:</b> ${animalSpecies}</p>
        <p style="color: #000 !important"><b>Возраст:</b> ${animalAge}</p>
        <p style="color: #000 !important"><b>Вес:</b> ${animalWeight}</p>
        <p style="color: #000 !important"><b>Пол:</b> ${animalSex}</p>
        <p style="color: #000 !important"><b>Сопутствующие заболевания (анамнез):</b> ${medicalHistory}</p>
        <p style="color: #000 !important"><b>Сопутствующая терапия:</b> ${concomitantTherapy}</p>
        <p style="color: #000 !important"><b>Описание нежелательной реакции:</b> ${reactionDescription}</p>
        <p style="color: #000 !important"><b>Дата возникновения нежелательной реакции:</b> ${reactionDate}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Ошибка при отправке отчёта:', error);
        return NextResponse.json({ success: false, error: 'Ошибка отправки' }, { status: 500 });
    }
}
