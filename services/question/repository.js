const questionModel = require("../../models/questionModel");

async function create(question) {
    return await questionModel.create(question);
}

async function getAll() {
    return await questionModel.find();
}

async function getOne(_id) {
    return await questionModel.findById(_id);
}

async function deleteOne(category) {
    return await questionModel.findOneAndDelete(category);
}

async function deleteAll() {
    return await questionModel.deleteMany();
}

module.exports = {
    create,
    getAll,
    getOne,
    deleteOne,
    deleteAll
};