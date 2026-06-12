import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Cambiamos 'email' por 'mensaje' para que coincida con tu formulario
    const { nombre, telefono, mensaje } = await request.json();

    const data = await resend.emails.send({
      from: 'Web Inmobiliaria <onboarding@resend.dev>', 
      to: 'contacto@pygi.es',
      subject: '🔥 ¡Nuevo mensaje desde la Web PYGI!',
      html: `
        <h2>Se han recibido nuevos datos desde el formulario de contacto:</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}