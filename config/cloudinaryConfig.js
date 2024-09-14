import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({ 
    cloud_name: '', 
    api_key: '', 
    api_secret: ''
})

export default cloudinary