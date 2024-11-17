// In your campaign controller
const agenda = require('../src/agenda');
 

const scheduleEmails = async (campaign) => {
  campaign.emails.forEach(async (email) => {
    // Schedule each email based on the `sendAt` time
    await agenda.schedule(new Date(email.sendAt), 'send email', email);
  });
};
