const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    roomid: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['single', 'group'],
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;