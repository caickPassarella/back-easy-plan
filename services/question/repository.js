const questionModel = require("../../models/questionModel");

async function create(question) {
    console.log(question);
    return await questionModel.create(question);
}

async function getAll() {
    return await questionModel.find();
}

async function getOne(filter) {
    return await questionModel.findOne(filter);
}

async function deleteOne(category) {
    return await questionModel.findOneAndDelete(category)
}

module.exports = {
    create,
    getAll,
    getOne,
    deleteOne
};