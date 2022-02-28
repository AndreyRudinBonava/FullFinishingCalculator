const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('requests', {
        title: "Все заявки"
    });
});

module.exports = router;