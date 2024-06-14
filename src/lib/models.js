import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true,
    },
    username: {
        type: String,
        trim: true
    },
    userImage: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    website: {
        type: String,
        trim: true,
        match: [/^(https?:\/\/)?([\w\d\-_]+\.+\S+)(\/[\w\d\-_#?&%=]+)*\/?$/, 'Please enter a valid URL']
    },
    rating: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

export const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);


