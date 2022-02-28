const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('finish', {
        title: "Завершение",
        
        isStageFinish: true,
        isDisplayUnitInfos: true,
    });
});

module.exports = router;