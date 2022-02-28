const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    const unitsParameters = [
        {
            urlAttributeImage:'test2',
            nameRoomParameter:'test2',
            valueRoomParameter:'tes2'
        },
        {
            urlAttributeImage:'test3',
            nameRoomParameter:'test3',
            valueRoomParameter:'test3'
        }
    ]
    const rooms = [
        {
            roomName: 'Спальня',
            roomParameters: [
                {
                    urlAttributeImage:'test',
                    nameRoomParameter:'test',
                    valueRoomParameter:'test'
                },
                {
                    urlAttributeImage:'test1',
                    nameRoomParameter:'test1',
                    valueRoomParameter:'test1'
                },
            ]
        }
    ]
    res.render('viewingSelected', {
        title: "Просмотр",

        isStageFinish: true,
        isDisplayUnitInfos: true,

        urlPreviousPage: '/materials',

        rooms,
        unitsParameters
    });
});

module.exports = router;