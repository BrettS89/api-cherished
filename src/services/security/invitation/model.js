import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'security/account',
  },
  active: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

export default mongoose.model('security/invitation', schema);
