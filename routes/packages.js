const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('packages', {
        title: "Выбор пакета",

        isStageSelectPackages: true,
        isDisplayUnitInfos: true,

        urlPreviousPage: '/units',
    });
});

module.exports = router;