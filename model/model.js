// models/campaignModel.js
const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  subject: String,
  body: String,
  recipients: [String],
  sendAt: Date,  // Date when the email should be sent
});

const campaignSchema = new mongoose.Schema({
  name: String,
  emails: [emailSchema],
  createdBy: String,
});

const Campaign = mongoose.model('Campaign', campaignSchema);
module.exports = Campaign;
