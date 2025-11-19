// models/ContactForm.js
import mongoose from 'mongoose';

// Status History Schema
const StatusHistorySchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true,
    enum: [0, 1, 2, 3]
  },
  changedBy: {
    type: String,
    default: 'System'
  },
  assignedTo: {
    type: String,
    default: null
  },
  note: {
    type: String,
    maxlength: [1000, 'Note cannot exceed 1000 characters'],
    default: null
  },
  followUpDate: {
    type: Date,
    default: null
  },
  changedAt: {
    type: Date,
    default: Date.now
  }
}, { _id: true });

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
    required: function() {
      return this.formType !== 'contact-modal';
    },
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  service: {
    type: String,
    enum: ['web-design', 'web-development', 'mobile-app', 'ui-ux', 'consulting', 'not_specified'],
    default: 'not_specified',
    required: function() {
      return this.formType === 'contact-page-form';
    }
  },
  formType: {
    type: String,
    required: [true, 'Form type is required'],
    enum: ['contact-form', 'contact-page-form', 'quote-form', 'consultation-form', 'support-form', 'newsletter-form', 'contact-modal'],
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
    type: Number,
    enum: [0, 1, 2, 3],
    default: 1
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  assignedTo: {
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
  },
  recaptchaVerified: {
    type: Boolean,
    default: false
  },
  // Status history array
  statusHistory: {
    type: [StatusHistorySchema],
    default: []
  },
  // Latest follow-up date (for quick queries)
  nextFollowUpDate: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
ContactFormSchema.index({ email: 1 });
ContactFormSchema.index({ status: 1, submittedAt: -1 });
ContactFormSchema.index({ createdAt: -1 });
ContactFormSchema.index({ formType: 1, submittedAt: -1 });
ContactFormSchema.index({ submittedFrom: 1 });
ContactFormSchema.index({ recaptchaVerified: 1 });
ContactFormSchema.index({ nextFollowUpDate: 1 });
ContactFormSchema.index({ assignedTo: 1 });

// Method to add status history entry
ContactFormSchema.methods.addStatusHistory = function(statusData) {
  this.statusHistory.push({
    status: statusData.status,
    changedBy: statusData.changedBy || 'System',
    assignedTo: statusData.assignedTo || null,
    note: statusData.note || null,
    followUpDate: statusData.followUpDate || null,
    changedAt: new Date()
  });

  // Update main status and assignedTo
  this.status = statusData.status;
  if (statusData.assignedTo) {
    this.assignedTo = statusData.assignedTo;
  }
  if (statusData.followUpDate) {
    this.nextFollowUpDate = statusData.followUpDate;
  }
};

// Method to format the submission data
ContactFormSchema.methods.toClientJSON = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    mobile: this.mobile,
    foundUs: this.foundUs,
    message: this.message,
    service: this.service,
    formType: this.formType,
    submittedFrom: this.submittedFrom,
    status: this.status,
    submittedAt: this.submittedAt,
    assignedTo: this.assignedTo,
    recaptchaVerified: this.recaptchaVerified,
    nextFollowUpDate: this.nextFollowUpDate,
    statusHistoryCount: this.statusHistory.length
  };
};

// Prevent model recompilation during hot reloading in development
const ContactForm = mongoose.models.ContactForm || mongoose.model('ContactForm', ContactFormSchema);

export default ContactForm;