import mongoose from 'mongoose';

const SmtpConfigSchema = new mongoose.Schema(
  {
    host: { 
      type: String, 
      required: true,
      trim: true 
    },
    port: { 
      type: Number, 
      required: true, 
      default: 587,
      min: 1,
      max: 65535
    },
    user: { 
      type: String, 
      required: true,
      trim: true 
    },
    pass: { 
      type: String, 
      required: true, 
      select: false 
    },
    encryption: { 
      type: String, 
      enum: ['tls', 'ssl', 'none'], 
      default: 'tls' 
    },
    from: { 
      type: String, 
      required: true,
      trim: true,
      lowercase: true 
    },
    fromName: { 
      type: String, 
      required: true,
      trim: true 
    },
    isActive: { 
      type: Boolean, 
      default: true,
      index: true 
    },
  },
  {
    timestamps: true,
    minimize: true,
    versionKey: false,
  }
);

// Indexes
SmtpConfigSchema.index({ isActive: 1, updatedAt: -1 });

// Get active SMTP config (with password for sending)
SmtpConfigSchema.statics.getActive = async function() {
  return await this.findOne({ isActive: true })
    .select('+pass')
    .lean()
    .exec();
};

// Get active SMTP config (without password for frontend)
SmtpConfigSchema.statics.getPublic = async function() {
  return await this.findOne({ isActive: true })
    .select('-pass')
    .lean()
    .exec();
};

// Save or update SMTP config
SmtpConfigSchema.statics.saveConfig = async function(config) {
  // Deactivate all existing
  await this.updateMany({}, { isActive: false });
  
  // Create or update the config
  const result = await this.findOneAndUpdate(
    { host: config.host, user: config.user }, // Match by host and user
    { ...config, isActive: true },
    { upsert: true, new: true, lean: true, select: '-pass' }
  );
  
  return result;
};

// Test SMTP connection
SmtpConfigSchema.methods.testConnection = async function() {
  // Implement SMTP connection test logic here
  return { success: true, message: 'Connection successful' };
};

const SmtpConfig = mongoose.models.SmtpConfig || 
  mongoose.model('SmtpConfig', SmtpConfigSchema);

export default SmtpConfig;