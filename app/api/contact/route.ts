import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST || 'smtp.hostinger.com',
            port: Number(process.env.MAIL_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER, // support@vnmarket.place
                pass: process.env.MAIL_PASS, // пароль от support
            },
        });

        await transporter.sendMail({
            from: `"Сайт ВЕЗОТИЛ" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO || 'support@vnmarket.place',
            subject: 'Новая заявка с сайта',
            html: `
        <h3>Новая заявка</h3>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Телефон:</b> ${phone}</p>
        <p><b>Сообщение:</b> ${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        return NextResponse.json({ success: false, error: 'Ошибка отправки' }, { status: 500 });
    }
}
