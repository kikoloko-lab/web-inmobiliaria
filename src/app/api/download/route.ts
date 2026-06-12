import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email requerido' }, { status: 400 });
    }

    // 1. Enviar el correo al CLIENTE con su regalo
    await resend.emails.send({
      from: 'Web Inmobiliaria <onboarding@resend.dev>', 
      to: email,
      subject: '🎁 Aquí tienes tu Guía Exclusiva - PYGI',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px;">
          <h2 style="color: #1c3d27;">¡Hola! Muchas gracias por tu interés.</h2>
          <p style="color: #4a4a4a; line-height: 1.6;">Aquí tienes la guía exclusiva que has solicitado para aprender a valorar tu casa en Hoyo de Manzanares este año.</p>
          <div style="margin: 30px 0; text-align: center;">
            <a href="https://pygi.es/guia_valoracion_2026.pdf" style="background-color: #d4af37; color: white; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px; display: inline-block;">Descargar Guía en PDF</a>
          </div>
          <p style="color: #888888; font-size: 11px;">Si el botón no funciona, puedes copiar y pegar este enlace en tu navegador: https://pygi.es/guia_valoracion_2026.pdf</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #1c3d27; font-weight: bold; margin-bottom: 0;">El equipo de PYGI</p>
        </div>
      `,
    });

    // 2. Avisarte a TI (contacto@pygi.es) de que tienes un nuevo interesado
    await resend.emails.send({
      from: 'Web Inmobiliaria <onboarding@resend.dev>', 
      to: 'contacto@pygi.es',
      subject: '🔥 ¡Nuevo Lead! Alguien ha descargado la guía',
      html: `
        <h3>¡Buenas noticias!</h3>
        <p>El usuario con el correo electrónico <strong>${email}</strong> acaba de solicitar la guía de valoración desde la web.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}