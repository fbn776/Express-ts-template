import mongoose from "mongoose";

const tempSchema = new mongoose.Schema({
        name: String,
        user_id: {type: String, unique: true, required: true},
        password: {type: String, required: true, select: false},
    }, {timestamps: true}
);

const Temp = mongoose.model('temp', tempSchema);
export default Temp;