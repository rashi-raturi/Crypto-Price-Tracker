const Alert = require('../models/alert');
const getPrice = require('../services/cryptoService');
const sendEmail = require('../services/emailNotificationService');

const createAlert = async (req,res) => {
    try {
        const {userId, cryptoId, priceThreshold} = req.body;
        const newAlert = new Alert({userId, cryptoId, priceThreshold});
        await newAlert.save();

        return res.status(201).json({ msg: 'Alert created successfully' });


    } catch (error) {
        return res.status(500).json({msg: error});
    }
}