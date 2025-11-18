import connectDB from '@/lib/db';
import ResendConfig from '@/models/settings/ResendConfig';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    await connectDB();
    const config = await ResendConfig.getPublic();

    return NextResponse.json({
      success: true,
      data: config,
    });
  } catch (error) {
    console.error('Resend GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch Resend config' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate required fields
    const required = ['apiKey', 'from', 'fromName'];
    const missing = required.filter(field => !body[field]);
    
    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    const config = await ResendConfig.saveConfig({
      apiKey: body.apiKey,
      from: body.from,
      fromName: body.fromName,
    });

    return NextResponse.json({
      success: true,
      message: 'Resend configuration saved successfully',
      data: config,
    });
  } catch (error) {
    console.error('Resend POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save Resend config' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await connectDB();
    await ResendConfig.deleteMany({});

    return NextResponse.json({
      success: true,
      message: 'Resend configuration deleted',
    });
  } catch (error) {
    console.error('Resend DELETE error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete Resend config' },
      { status: 500 }
    );
  }
}

