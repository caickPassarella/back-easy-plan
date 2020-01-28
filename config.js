require("dotenv").config({ path: ".env" });
const Joi = require("joi");

const configSchema = Joi.object({
    DATABASE: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    PORT: Joi.number().required()
})

const config = {
    DATABASE: process.env.DATABASE,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    PORT: process.env.PORT
}

const result = configSchema.validate(config);
if (result.error) {
    console.error(result.error);
    process.exit(1);
}

module.exports = result.value;