const {Router} = require('express');
const Corpus = require('../models/projects/corpuse')
const router = Router();

function uArray(array) {
    var out = [];
    for (var i=0, len=array.length; i<len; i++)
        if (out.indexOf(array[i]) === -1)
            out.push(array[i]);
    return out;
}

router.get('/:corpus_id', async (req, res) => {
    const corpus = await Corpus.findByPk(+req.params.corpus_id)
    let floorsArr = []
    await corpus.getUnits()
        .then( res => {
            for(let i=0; i < res.length; i++) {
                floorsArr.push(res[i].dataValues.floor)
            }
        })
    
    floorsArr = [...new Set(floorsArr)]
    const floors = []
    for (let i = 0; i < floorsArr.length; i++) {
        floors.push({number: floorsArr[i]})
      }
    console.log(floors)

    res.render('floors', {
        title: 'Выбор этажа',
        isStageSelectUnit: true,
        urlPreviousPage: '/corpuses',
        floors
    });
});

module.exports = router;