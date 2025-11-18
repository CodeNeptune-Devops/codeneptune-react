import mongoose from 'mongoose';

const ResendConfigSchema = new mongoose.Schema(
  {
    apiKey: { 
      type: String, 
      required: true, 
      select: false,
      trim: true 
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
ResendConfigSchema.index({ isActive: 1, updatedAt: -1 });

// Get active Resend config (with API key for sending)
ResendConfigSchema.statics.getActive = async function() {
  return await this.findOne({ isActive: true })
    .select('+apiKey')
    .lean()
    .exec();
};

// Get active Resend config (without API key for frontend)
ResendConfigSchema.statics.getPublic = async function() {
  return await this.findOne({ isActive: true })
    .select('-apiKey')
    .lean()
    .exec();
};

// Save or update Resend config
ResendConfigSchema.statics.saveConfig = async function(config) {
  // Deactivate all existing
  await this.updateMany({}, { isActive: false });
  
  // Create or update the config
  const result = await this.findOneAndUpdate(
    { from: config.from }, // Match by from email
    { ...config, isActive: true },
    { upsert: true, new: true, lean: true, select: '-apiKey' }
  );
  
  return result;
};

// Test Resend API key
ResendConfigSchema.methods.testApiKey = async function() {
  // Implement Resend API test logic here
  return { success: true, message: 'API key valid' };
};

const ResendConfig = mongoose.models.ResendConfig || 
  mongoose.model('ResendConfig', ResendConfigSchema);

export default ResendConfig;