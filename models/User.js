const { Schema, model } = require('mongoose');
const userSchema = new Schema(
    {
        username:
        {
            type: {$trim: {input: String}},
            required: true,
        
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'friends',
            }
        ],

        email: [ {
            type: String,
            required:true,
            
    }],
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
