const { Schema, model } = require('mongoose');
const userSchema = new mongoose.Schema(
{
    username: {type:String, required:true},
    friendslist:{ type:Array, required:true},

//         const grocerySchema = new mongoose.Schema({
//             // Add individual properties and their types
//             // Setting required to true will disallow null values
//             item: { type: String, required: true },
//             stockCount: Number,
//             price: Number,
//             inStock: Boolean,
//             // Use built in date method to get current date
//             lastAccessed: { type: Date, default: Date.now },
//         });
// }

})