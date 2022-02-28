const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('materials', {
        title: 'Выбор материалов',

        isStageSelectMaterials: true,
        isDisplayUnitInfos: true,

        urlPreviousPage: '/packages',
    });
});

module.exports = router;