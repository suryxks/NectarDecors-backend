const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt=require('bcrypt')

const UserSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    _id: {
        type: Schema.Types.ObjectId,
        unique:true
    },
    adddresses: [
        {
            pincode: String,
            address: String,
            city: String,
            state:String
        }
    ],
    pastOrders: Array,
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
    },
    createdAt: Number,
    updatedAt:Number,

},
    {
        timestamps: true
    }
)
UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User=mongoose.model('User',UserSchema)
module.exports={User}