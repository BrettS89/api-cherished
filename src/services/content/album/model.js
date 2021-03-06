import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'security/account',
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

export default mongoose.model('content/album', schema);
