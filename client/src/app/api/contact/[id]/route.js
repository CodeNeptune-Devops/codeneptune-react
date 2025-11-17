// app/api/contact/[id]/route.js
import { NextResponse } from 'next/server';
import ContactForm from '@/models/ContactForm';
import connectDB from '@/lib/db';

// PATCH endpoint to update contact form status
export async function PATCH(request, { params }) {
  try {
    await connectDB();

    // FIX: Await params before accessing id
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    // Validate status
    if (status === undefined || status === null) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      );
    }

    // Validate status value (only 0, 1, 2, 3 allowed)
    const validStatuses = [0, 1, 2, 3];
    if (!validStatuses.includes(Number(status))) {
      return NextResponse.json(
        { error: 'Invalid status. Must be 0, 1, 2, or 3' },
        { status: 400 }
      );
    }

    // Find and update the contact submission
    const updatedSubmission = await ContactForm.findByIdAndUpdate(
      id,
      { 
        status: Number(status),
        updatedAt: new Date()
      },
      { 
        new: true, // Return the updated document
        runValidators: true 
      }
    );

    if (!updatedSubmission) {
      return NextResponse.json(
        { error: 'Contact submission not found' },
        { status: 404 }
      );
    }

    console.log('✅ Contact status updated:', {
      id: updatedSubmission._id,
      newStatus: updatedSubmission.status
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Status updated successfully',
        data: updatedSubmission
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error updating contact status:', error);

    // Handle invalid ObjectId
    if (error.name === 'CastError') {
      return NextResponse.json(
        { error: 'Invalid contact ID format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to update status' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve a single contact submission
export async function GET(request, { params }) {
  try {
    await connectDB();

    // FIX: Await params before accessing id
    const { id } = await params;

    const submission = await ContactForm.findById(id);

    if (!submission) {
      return NextResponse.json(
        { error: 'Contact submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: submission
    });

  } catch (error) {
    console.error('❌ Error fetching submission:', error);

    if (error.name === 'CastError') {
      return NextResponse.json(
        { error: 'Invalid contact ID format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch submission' },
      { status: 500 }
    );
  }
}