const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SitesController {
    // [GET] /home
    home(req, res, next) {
        Course.find({})
        .then(courses => {
            res.render('home', { 
                courses:  mutipleMongooseToObject(courses)
            });
        })
        .catch(next);
        
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
