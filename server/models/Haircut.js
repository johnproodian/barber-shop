const { Schema, model, Types } = require('mongoose');

const haircutSchema = new Schema(
    {
        // haircutId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId()
        // },
        haircutText: {
            type: String,
            // required: 'You need to enter a haircut!',
            minlength: 1,
            maxlength: 30
        }, 
        // Do we need this? If we do, we should add the dateformat helper from module 21 into the util folder and then require it at the top of this page
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        //     get: timestamp => dateformat(timestamp)
        // },
        name: {
            type: String,
            required: true
        },
        instructions: {
            type: String,
            minlength: 0,
            maxlength: 280,
            required: false
        }
    }
)

// above: 
// below: do we want to add virtuals??

const Haircut = model('Haircut', haircutSchema);

module.exports = Haircut;