import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,
            required: true,
        },
        coverImg: {
            type: String
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        refreshToken: {
            type: String
        }

    }, {
    timestamps: true
}
)
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})
userSchema.method
export const User = mongoose.model("User", userSchema)