const {Router} = require('express');
const Queue = require('../models/projects/queue')
const router = Router();

router.get('/:queue_id', async (req, res) => {
    const queue = await Queue.findByPk(+req.params.queue_id)
    const corpuses = []
    await queue.getCorpuses()
        .then( res => {
            for(let i=0; i < res.length; i++) {
                corpuses.push(res[i])
            }
        })


    res.render('corpuses', {
        title: 'Выбор корпуса',
        isStageSelectUnit: true,
        urlPreviousPage: '/queues',
        corpuses
    });
});

module.exports = router;