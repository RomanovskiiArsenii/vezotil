import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const formData = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.REACTION_HOST,
            port: Number(process.env.REACTION_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.REACTION_USER,
                pass: process.env.REACTION_PASS,
            },
        });

        const htmlContent = `
      <h3>Отчёт о нежелательной реакции</h3>
      ${Object.entries(formData)
          .map(([key, value]) => `<p><b>${key}:</b> ${value}</p>`)
          .join('')}
    `;

        await transporter.sendMail({
            from: `"Сайт ВЕЗОТИЛ" <${process.env.REACTION_USER}>`,
            to: process.env.REACTION_TO,
            subject: 'Новый отчёт о нежелательной реакции',
            html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Ошибка при отправке отчёта:', error);
        return NextResponse.json({ success: false, error: 'Ошибка отправки' }, { status: 500 });
    }
}
