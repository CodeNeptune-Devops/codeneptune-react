// app/api/contact/[id]/history/route.js
import { NextResponse } from 'next/server';
import ContactForm from '@/models/ContactForm';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';

// GET - Fetch status history for a contact
export async function GET(request, { params }) {
  try {
    await connectDB();
    
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid contact ID' },
        { status: 400 }
      );
    }

    const contact = await ContactForm.findById(id).select('statusHistory');

    if (!contact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      );
    }

    // Sort history by most recent first
    const sortedHistory = contact.statusHistory.sort((a, b) => 
      new Date(b.changedAt) - new Date(a.changedAt)
    );

    return NextResponse.json({
      success: true,
      data: sortedHistory
    });
  } catch (error) {
    console.error('Error fetching status history:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch status history' },
      { status: 500 }
    );
  }
}