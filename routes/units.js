const {Router} = require('express');
const Proposal = require('../models/proposal');
const Project = require('../models/projects/project')
const Corpuse = require('../models/projects/corpuse')
const Queue = require('../models/projects/queue')
const Unit = require('../models/projects/unit')
const router = Router();

router.get('/', (req, res) => {
    const units = [
        {
            project: 'MG',
            queueString: '3 очередь',
            body: '1 корпус',
            queueNumber: 3,
            floor: 1,
            unitNumber: `1.002`,
            unitName: `MG3-3.N1.002`,
            area: 48.52,
            bedroomsNumber: 3,
        }
    ]

    res.render('units', {
        title: "Квартиры",

        isStageSelectUnit: true,

        urlPreviousPage: '/corpuses',

        units
    });
});

router.post('/', async (req, res) => {
    const request = new Proposal(req.body.unit_name, req.body.bedroom_number, req.body.floor_number);
    console.log(request);
    await request.save();
    // Потом установить редирект на страницу с результатами поиска
    res.redirect('/');
});

module.exports = router;