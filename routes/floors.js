const {Router} = require('express');
const Queue = require('../models/projects/queue')
const router = Router();

router.get('/:corpus_id', async (req, res) => {
    const corpus = await Queue.findByPk(+req.params.corpus_id)
    const floors = ['1 этаж','2 этаж','3 этаж']
    // await queue.getCorpuses()
    //     .then( res => {
    //         for(let i=0; i < res.length; i++) {
    //             corpuses.push(res[i])
    //         }
    //     })

    res.render('floors', {
        title: 'Выбор этажа',
        isStageSelectUnit: true,
        urlPreviousPage: '/corpuses',
        floors
    });
});

module.exports = router;