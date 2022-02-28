const {Router} = require('express');
const Project = require('../models/projects/project')
const Corpuse = require('../models/projects/corpuse')
const Queue = require('../models/projects/queue')
const router = Router();

router.get('/', (req, res) => {
    const corpuses = [
        {
            projectName: 'Magnifica',
            queueName:'3 очередь',
            corpusName: 'Корпус 1'
        },
        {
            projectName: 'GronaLund',
            queueName: 'Этап 7.1',
            corpusName: 'Корпус 3.7'
        },
    ]

    res.render('corpuses', {
        title: 'Выбор корпуса',

        isStageSelectUnit: true,

        urlPreviousPage: '/queues',

        corpuses
    });
});

module.exports = router;