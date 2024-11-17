const { Agenda } = require('agenda');
const { sendEmail } = require('../sendEmail');
const mongoose = require('mongoose');


const agenda = new Agenda({
    db: { address: 'mongodb://localhost:27017/agenda' }, // MongoDB for Agenda job storage
  });

  agenda.define('send email', async (job) => {
    const email = job.attrs.data;
    await sendEmail(email);
  });

  agenda.start();

  const scheduleEmails = async (campaign) => {
    campaign.emails.forEach(async (email) => {
      await agenda.schedule(new Date(email.sendAt), 'send email', email);
    });
  };