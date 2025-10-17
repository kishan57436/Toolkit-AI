import {v2 as cloudinary} from 'cloudinary'


// this is the best thing i have to known about the solution
// without any worry lets not take it easily
// i have used cloudinary over here to store the media out 
// 


const connectCloudinary = async ()=>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
};

export default connectCloudinary;