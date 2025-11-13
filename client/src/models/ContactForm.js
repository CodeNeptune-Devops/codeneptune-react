// models/ContactForm.js
import mongoose from 'mongoose';

const ContactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true,
    validate: {
      validator: function(v) {
        return /^[0-9]{10,15}$/.test(v.replace(/[\s-+()]/g, ''));
      },
      message: 'Please enter a valid mobile number'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email address'
    }
  },
  foundUs: {
    type: String,
    enum: ['google', 'social_media', 'friends', 'referral', 'others', 'not_specified'],
    default: 'not_specified'
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  formType: {
    type: String,
    required: [true, 'Form type is required'],
    enum: ['contact-form', 'quote-form', 'consultation-form', 'support-form', 'newsletter-form'],
    default: 'contact-form',
    index: true
  },
  submittedFrom: {
    type: String,
    required: [true, 'Submission route is required'],
    trim: true,
    default: '/'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in_progress', 'completed', 'archived'],
    default: 'new'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  },
  assignedTo: {
    type: String,
    default: null
  },
  ipAddress: {
    type: String,
    default: null
  },
  userAgent: {
    type: String,
    default: null
  },
  referrer: {
    type: String,
    default: null
  }
}, {
  timestamps: true // Adds createdAt and updatedAt automatically
});

// Create indexes for better query performance
ContactFormSchema.index({ email: 1 });
ContactFormSchema.index({ status: 1, submittedAt: -1 });
ContactFormSchema.index({ createdAt: -1 });
ContactFormSchema.index({ formType: 1, submittedAt: -1 });
ContactFormSchema.index({ submittedFrom: 1 });

// Add a method to format the submission data
ContactFormSchema.methods.toClientJSON = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    mobile: this.mobile,
    foundUs: this.foundUs,
    message: this.message,
    formType: this.formType,
    submittedFrom: this.submittedFrom,
    status: this.status,
    submittedAt: this.submittedAt
  };
};

// Prevent model recompilation during hot reloading in development
const ContactForm = mongoose.models.ContactForm || mongoose.model('ContactForm', ContactFormSchema);

export default ContactForm;