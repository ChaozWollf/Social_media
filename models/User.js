const { Schema, model } = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        username: String, required: true,
        friendslist: Array, required: true,
    
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
