const BoardEntry = require("../models/BoardEntry");

async function uploadScore(req, res) {
  try {
    const newEntryData = req.body;
    const newEntry = await BoardEntry.create(newEntryData);
    res.status(201).json(newEntry);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}
async function getLeaderboard(req, res) {
  try {
    const allEntries = await BoardEntry.find().sort({ timestamp: -1 });
    res.status(200).json(allEntries);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

module.exports = { uploadScore, getLeaderboard };
