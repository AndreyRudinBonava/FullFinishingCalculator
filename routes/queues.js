const {Router} = require('express');
const Project = require('../models/projects/project')
const router = Router();

router.get('/', async (req, res) => {
    // const project = await Project.findByPk(+req.params.project_id)
    const project = await Project.findByPk(1)
    const queues = []
    await project.getQueues()
        .then( res => {
            for(let i=0; i < res.length; i++) {
                queues.push(res[i])
            }
        })

    res.render('queues', {
        title: 'Выбор очереди',
        isStageSelectUnit: true,
        urlPreviousPage: '/',
        queues
    });
});


module.exports = router;