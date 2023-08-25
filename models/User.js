const { Schema, model } = require('mongoose');
const userSchema = new Schema(
    {
        username:
        {
            type: String,
            required: true,
        },
        friendslist: [
            {
                type: Schema.Types.ObjectId,
                ref: 'friends',
            }
        ],

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts',
            },
        ],

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);



userSchema
    .virtual('users')
    .get(function () {
        return `${this.username}`;
    })
    .set(function (v) {
        const username = v.split(' ')[0];
        this.set({ username });
    });

const User = model('user', userSchema);

module.exports = User;
