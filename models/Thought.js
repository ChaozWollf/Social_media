const { Schema, model } = require('mongoose');


const thoughtsSchema = new Schema(
    {
        text: String,
        username: String,
        comments: [{ type: Schema.Types.ObjectId, ref: 'thoughts' }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;