import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        // const { name, email, phone, message } = await req.json();

        const formData = await req.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const topic = formData.get('topic') as string;
        const message = formData.get('message') as string;
        const batchNumber = formData.get('batchNumber') as string;
        const purchaseDate = formData.get('purchaseDate') as string;
        const purchasePlace = formData.get('purchasePlace') as string;
        const photo = formData.get('photo') as File | null;

        // Текст письма
        let html = `
        <h2 style="color: #000 !important">Новая заявка с сайта ВЕЗОТИЛ</h2>
        <p style="color: #000 !important"><b>Имя:</b> ${name}</p>
        <p style="color: #000 !important"><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
        <p style="color: #000 !important"><b>Телефон:</b> ${phone}</p>
        <p style="color: #000 !important"><b>Тема:</b> ${topic}</p>
        <p style="color: #000 !important"><b>Сообщение:</b> ${message}</p>
        `;

        // Если тема = Нежелательная реакция → добавить блок
        if (topic === 'Нежелательная реакция') {
            html += `
        <br>
        <h3 style="color: #000 !important">Детали нежелательной реакции</h3>
        <p style="color: #000 !important"><b>Номер серии:</b> ${batchNumber}</p>
        <p style="color: #000 !important"><b>Дата покупки:</b> ${purchaseDate}</p>
        <p style="color: #000 !important"><b>Место покупки:</b> ${purchasePlace}</p>
        <p style="color: #000 !important"><b>Фото упаковки в прикрепленном файле</b></p>
        `;
        }

        // Транспорт для отправки
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Настраиваем письмо
        const mailOptions: any = {
            from: `"ВЕЗОТИЛ" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO,
            subject: 'ВЕЗОТИЛ | Новая заявка',
            html,
        };

        // Если есть фото → прикрепить как вложение
        if (photo) {
            const bytes = await photo.arrayBuffer();
            mailOptions.attachments = [
                {
                    filename: photo.name,
                    content: Buffer.from(bytes),
                },
            ];
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        return NextResponse.json({ success: false, error: 'Ошибка отправки' }, { status: 500 });
    }
}
