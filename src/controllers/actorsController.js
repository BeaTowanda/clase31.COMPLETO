const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    'list': (req, res) => {
        db.Actors.findAll()
            .then(actors => {
                res.render('actoresList.ejs', {actors})
            })
    },
    'detail': (req, res) => {
        db.Actors.findByPk(req.params.id)
            .then(actors => {
                res.render('actoresDetail.ejs', {actors});
            });
    }

}

module.exports = actorsController;