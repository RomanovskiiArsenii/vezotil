// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        // Форма отправляется как multipart/form-data
        const fd = await req.formData();

        const name = (fd.get('name') || '') as string;
        const email = (fd.get('email') || '') as string;
        const phone = (fd.get('phone') || '') as string;
        const topic = (fd.get('topic') || '') as string;
        const company = (fd.get('company') || '') as string;
        const questionTopic = (fd.get('questionTopic') || '') as string;
        const message = (fd.get('message') || '') as string;

        // (минимальная проверка на пустые обязательные — можно убрать, если не нужна)
        if (!name || !email || !phone || !topic || !message) {
            return NextResponse.json(
                { success: false, error: 'Заполните обязательные поля: ФИО, Email, Телефон, Тема, Сообщение.' },
                { status: 400 }
            );
        }

        // Формируем письмо
        let html = `
      <h2 style="color:#000 !important">Новая заявка с сайта ВЕЗОТИЛ</h2>
      <p style="color:#000 !important"><b>Имя:</b> ${escapeHtml(name)}</p>
      <p style="color:#000 !important"><b>Email:</b> <a href="mailto:${escapeAttr(email)}">${escapeHtml(email)}</a></p>
      <p style="color:#000 !important"><b>Телефон:</b> ${escapeHtml(phone)}</p>
      <p style="color:#000 !important"><b>Тема:</b> ${escapeHtml(topic)}</p>
    `;

        // Блоки по условию
        if (topic === 'Задать вопрос') {
            html += `
        <p style="color:#000 !important"><b>Категория вопроса:</b> ${escapeHtml(questionTopic)}</p>
        <p style="color:#000 !important"><b>Компания:</b> ${escapeHtml(company)}</p>
      `;
        }

        html += `
      <p style="color:#000 !important"><b>Сообщение:</b></p>
      <div style="white-space:pre-wrap;color:#000 !important">${escapeHtml(message)}</div>
    `;

        // Настройка транспорта
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT) || 465,
            secure: (Number(process.env.MAIL_PORT) || 465) === 465, // true для 465
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Письмо
        const mailOptions = {
            from: `"ВЕЗОТИЛ" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO,
            subject: 'ВЕЗОТИЛ | Новая заявка',
            html,
            replyTo: email || undefined,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        return NextResponse.json({ success: false, error: 'Ошибка отправки' }, { status: 500 });
    }
}

/** Небольшая экранизация, чтобы не сломать html письма */
function escapeHtml(s: string) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s: string) {
    return escapeHtml(s).replace(/"/g, '&quot;'); // для атрибутов типа href=""
}
