import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import EmailSettings from '@/models/EmailSettings';
import SmtpConfig from '@/models/settings/SmtpConfig';
import ResendConfig from '@/models/settings/ResendConfig';

export async function GET() {
  try {
    await connectDB();

    const [activeProvider, smtpConfig, resendConfig] = await Promise.all([
      EmailSettings.getActiveProvider(),
      SmtpConfig.getPublic(),
      ResendConfig.getPublic(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        activeProvider,
        smtp: smtpConfig,
        resend: resendConfig,
      },
    });
  } catch (error) {
    console.error('Email settings GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch email settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const { activeProvider } = await request.json();

    if (!['smtp', 'resend'].includes(activeProvider)) {
      return NextResponse.json(
        { success: false, error: 'Invalid provider' },
        { status: 400 }
      );
    }

    await EmailSettings.setActiveProvider(activeProvider);

    return NextResponse.json({
      success: true,
      message: `Active provider switched to ${activeProvider}`,
    });
  } catch (error) {
    console.error('Email settings PUT error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update active provider' },
      { status: 500 }
    );
  }
}
