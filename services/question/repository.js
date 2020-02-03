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

async function updateOne(_id) {
    return await questionModel.findByIdAndUpdate(_id)
}

async function updateAll() {
    return await questionModel.updateMany();
}

async function deleteOne(_id) {
    return await questionModel.deleteOne({_id});
}

async function deleteAll() {
    return await questionModel.deleteMany();
}

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
};