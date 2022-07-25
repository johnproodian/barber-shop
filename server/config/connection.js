const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/barber-shop',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//  const storage = multer.diskStorage({
//     destination: 'uploads'
//     filename: (req, file, cb) => {
//         cb(null, Date.now + file.originalname)
//     }
//  })


module.exports = mongoose.connection;