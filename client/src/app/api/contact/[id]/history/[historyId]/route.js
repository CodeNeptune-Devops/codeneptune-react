// app/api/contact/[id]/history/[historyId]/route.js
import { NextResponse } from 'next/server';
import ContactForm from '@/models/ContactForm';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';

// PATCH - Update a specific note in history
export async function PATCH(request, { params }) {
  try {
    await connectDB();
    
    const { id, historyId } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(historyId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { note, assignedTo, followUpDate } = body;

    const contact = await ContactForm.findById(id);

    if (!contact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      );
    }

    // Find the history entry
    const historyEntry = contact.statusHistory.id(historyId);

    if (!historyEntry) {
      return NextResponse.json(
        { success: false, error: 'History entry not found' },
        { status: 404 }
      );
    }

    // Update fields
    if (note !== undefined) historyEntry.note = note;
    if (assignedTo !== undefined) historyEntry.assignedTo = assignedTo;
    if (followUpDate !== undefined) {
      historyEntry.followUpDate = followUpDate;
      // Update main follow-up date if this is the most recent entry with a follow-up
      const hasNewerFollowUp = contact.statusHistory.some(h => 
        h._id.toString() !== historyId && 
        h.followUpDate && 
        new Date(h.changedAt) > new Date(historyEntry.changedAt)
      );
      if (!hasNewerFollowUp) {
        contact.nextFollowUpDate = followUpDate;
      }
    }

    await contact.save();

    return NextResponse.json({
      success: true,
      message: 'Note updated successfully',
      data: historyEntry
    });
  } catch (error) {
    console.error('Error updating note:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update note' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a specific note from history
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    
    const { id, historyId } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(historyId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid ID' },
        { status: 400 }
      );
    }

    const contact = await ContactForm.findById(id);

    if (!contact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      );
    }

    // Find the history entry
    const historyEntry = contact.statusHistory.id(historyId);
    
    if (!historyEntry) {
      return NextResponse.json(
        { success: false, error: 'History entry not found' },
        { status: 404 }
      );
    }

    // Don't allow deleting if it's the only history entry
    if (contact.statusHistory.length === 1) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete the only history entry' },
        { status: 400 }
      );
    }

    // Use pull instead of deleteOne
    contact.statusHistory.pull(historyId);

    // Update follow-up date if needed
    const latestFollowUp = contact.statusHistory
      .filter(h => h.followUpDate)
      .sort((a, b) => new Date(b.changedAt) - new Date(a.changedAt))[0];
    
    contact.nextFollowUpDate = latestFollowUp?.followUpDate || null;

    await contact.save();

    return NextResponse.json({
      success: true,
      message: 'Note deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting note:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete note' },
      { status: 500 }
    );
  }
}