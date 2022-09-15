const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    
        createdAt: Number,
        updatedAt: Number,
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "The user id is required"],
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    }
)

const Cart = mongoose.model('Cart', cartSchema);

module.exports={Cart}
