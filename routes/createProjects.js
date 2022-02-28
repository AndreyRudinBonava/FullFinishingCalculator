
// router.post('/', async (req, res) => {
//     try {
//         const project = await Project.create({
//             name: req.body.title,
//             code: req.body.code,
//         })
//         res.status(201).json({project})
//     } catch(e) {
//         console.log(e)
//         res.status(500).json({
//             message: 'Server error'
//         })
//     }

//     // Потом установить редирект на страницу с результатами поиска
//     // res.redirect('/');
// });