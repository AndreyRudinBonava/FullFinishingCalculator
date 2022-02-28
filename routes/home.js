const {Router} = require('express');
const Project = require('../models/projects/project')
const router = Router();

router.get('/', async (req, res) => {

    const projects = await Project.findAll({
        attributes: ['name', 'id'],
    })

    res.render('index', {
        title: 'Главная страница',
        isStageSelectUnit: true,
        projects
    });
});

module.exports = router;