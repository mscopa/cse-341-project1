const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').findOne({ _id: contactId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

module.exports = {
    getAll,
    getSingle,
};