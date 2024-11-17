const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const { name, emails, createdBy } = req.body;
      const newCampaign = new Campaign({ name, emails, createdBy });
      await newCampaign.save();
      res.status(201).json(newCampaign);
    } catch (err) {
      res.status(500).json({ message: 'Error creating campaign' });
    }
  });