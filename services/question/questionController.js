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
        const question = await questionRepository.getOne(req.params.id);

        if (!question) {
            console.error("No dodument with that id was found");
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

const deleteOne = async (req, res, next) => {
    try {
        const question = await questionRepository.deleteOne(req.params.id);

        if (!question) {
            console.error("No dodument with that id was found");
            return next();
        };
        res.status(200).json({
            status: "success",
            question: null
        });
    }
    catch (error) {
        next(error);
    }
}

const updateOne = async (req, res, next) => {
    try {
        const question = await questionRepository.updateOne(req.params.id);

        if (!question) {
            console.error("No dodument with that id was found");
            return next();
        };
        res.status(200).json({
            status: "success",
            question
        });
    }
    catch (error) {
        next(error);
    }
}

const updateAll = async (req, res, next) => {
    try {
        const question = await questionRepository.updateAll();

        if (!question) {
            console.error("There's no document to update");
            return next();
        };
        res.status(200).json({
            status: "success",
            question: null
        });
    }
    catch (error) {
        next(error);
    }
}

const deleteAll = async (req, res, next) => {
    const question = await questionRepository.deleteAll();
    if (!question) {
        console.error("There is no documento to delete");
        return next();
    };
    res.status(200).json({
        status: "sucess",
        question: null
    });
}

module.exports = {
    getAll,
    create,
    getOne,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
};