const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        _id: {type: Number},
        name: { type: 'string', required: true},
        description: {type: 'string'},
        image: {type: 'string'},
        slug: {type: 'string', slug: 'name', unique: true},
        videoId: {type: 'string', required: true},
    }, 
    {   
        _id: false,
        timestamps: true,
    }
);

// add plugin
Course.plugin(AutoIncrement);
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});

module.exports = mongoose.model('Course', Course);
