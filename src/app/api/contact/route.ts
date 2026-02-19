import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Log the submission (placeholder — replace with email/CRM integration later)
    console.log('=== New Contact Form Submission ===');
    console.log('Name:', data.firstName, data.lastName);
    console.log('Phone:', data.phone);
    console.log('Email:', data.email);
    console.log('Address:', data.address);
    console.log('County:', data.county);
    console.log('Acreage:', data.acreage);
    console.log('Situation:', data.situation);
    console.log('Timestamp:', new Date().toISOString());
    console.log('===================================');

    return NextResponse.json(
      { success: true, message: 'Submission received. We will be in touch within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process submission.' },
      { status: 500 }
    );
  }
}
