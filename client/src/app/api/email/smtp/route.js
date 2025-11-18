import { NextResponse } from 'next/server';
import SmtpConfig from '@/models/settings/SmtpConfig';
import connectDB from '@/lib/db';

export async function GET() {
  try {
    await connectDB();
    const config = await SmtpConfig.getPublic();

    return NextResponse.json({
      success: true,
      data: config,
    });
  } catch (error) {
    console.error('SMTP GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch SMTP config' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate required fields
    const required = ['host', 'port', 'user', 'pass', 'from', 'fromName'];
    const missing = required.filter(field => !body[field]);
    
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    const config = await SmtpConfig.saveConfig({
      host: body.host,
      port: body.port,
      user: body.user,
      pass: body.pass,
      encryption: body.encryption || 'tls',
      from: body.from,
      fromName: body.fromName,
    });

    return NextResponse.json({
      success: true,
      message: 'SMTP configuration saved successfully',
      data: config,
    });
  } catch (error) {
    console.error('SMTP POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save SMTP config' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await connectDB();
    await SmtpConfig.deleteMany({});

    return NextResponse.json({
      success: true,
      message: 'SMTP configuration deleted',
    });
  } catch (error) {
    console.error('SMTP DELETE error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete SMTP config' },
      { status: 500 }
    );
  }
}

