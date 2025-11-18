// models/EmailSettings.js
import mongoose from 'mongoose';

const EmailSettingsSchema = new mongoose.Schema(
  {
    activeProvider: {
      type: String,
      enum: ['smtp', 'resend'],
      default: 'smtp',
      required: true,
    },
  },
  {
    timestamps: true,
    minimize: true,
    versionKey: false,
  }
);

EmailSettingsSchema.statics.getActiveProvider = async function() {
  const settings = await this.findOne().lean().exec();
  return settings?.activeProvider || 'smtp';
};

EmailSettingsSchema.statics.setActiveProvider = async function(provider) {
  return await this.findOneAndUpdate(
    {},
    { activeProvider: provider },
    { upsert: true, new: true, lean: true }
  );
};

const EmailSettings = mongoose.models.EmailSettings || 
  mongoose.model('EmailSettings', EmailSettingsSchema);

export default EmailSettings;