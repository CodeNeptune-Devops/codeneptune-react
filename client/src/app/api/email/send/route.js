import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import EmailSettings from '@/models/EmailSettings';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import SmtpConfig from '@/models/settings/SmtpConfig';
import ResendConfig from '@/models/settings/ResendConfig';

export async function POST(request) {
  try {
    await connectDB();
    const { to, subject, html, text } = await request.json();

    // Validate required fields
    if (!to || !subject || (!html && !text)) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: to, subject, html/text' },
        { status: 400 }
      );
    }

    const activeProvider = await EmailSettings.getActiveProvider();

    if (activeProvider === 'smtp') {
      const config = await SmtpConfig.getActive();
      
      if (!config) {
        return NextResponse.json(
          { success: false, error: 'No SMTP configuration found' },
          { status: 404 }
        );
      }

      const transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.encryption === 'ssl',
        auth: {
          user: config.user,
          pass: config.pass,
        },
      });

      await transporter.sendMail({
        from: `"${config.fromName}" <${config.from}>`,
        to,
        subject,
        html,
        text,
      });
    } else {
      const config = await ResendConfig.getActive();
      
      if (!config) {
        return NextResponse.json(
          { success: false, error: 'No Resend configuration found' },
          { status: 404 }
        );
      }

      const resend = new Resend(config.apiKey);

      await resend.emails.send({
        from: `${config.fromName} <${config.from}>`,
        to,
        subject,
        html,
        text,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      provider: activeProvider,
    });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}