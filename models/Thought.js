const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        text: String,
        username: String,
        },

    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;