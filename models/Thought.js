const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        text: String,
        username: String,
        comments: [{ type: Schema.Types.ObjectId, ref: 'thoughts' }],
        // reactions: [reactionSchema]
    },

    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;