const questionRepository = require("./repository");

const getAll = async (req, res, next) => {
    try {
        const question = await questionRepository.getAll()

        if (!question) {
            console.error("Error while trying to get all the questions");
            return next();
        }
        res.status(200).json({
            status: "success",
            question
        });
    }
    catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        const question = await questionRepository.create(req.body);

        res.status(201).json({
            status: "success",
            question
        });
    }
    catch (error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        const question = await questionRepository.getOne(req.params.filter);

        if (!question) {
            console.error("Error while trying to get the question");
            return next();
        }
        res.status(200).json({
            status: "success",
            question: null
        });
    }
    catch (error) {
        next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const question = await questionRepository.deleteOne(req.params.filter);

        if (!question) {
            console.error("No dodument with that id was found")
            return next()
        }
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
    create,
    getOne,
    deleteOne
};