import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'security/account',
    required: true,
  },
  album_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'content/album',
    required: true,
    index: true,
  },
  url: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

export default mongoose.model('content/photo', schema);
