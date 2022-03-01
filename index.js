// Подумать над тем, как будет проиходить добавление новых столбцов в таблице в БД
// Подгрузить страницу с bim360 на странице с материалами
// Формирование луклиста в пдф
// Формирование страницы с конечным выбором
// Внедрение кухонь в приложение
// Поиск квартиры из всех реализовать
// Изменение модели ревит по выбору пользователя
// Отправка отчета на email о любых изменениях
// Выбор БД для приложения(независимая от какого-то сервера или зависимая)
// + Кнопка назад на всех страницах
// Реализовать БД и внедрить ее в работу
// Реализовать работу не на локальном сервере
// Кнопка с показом всплывающих характеристик выбранной квартиры
// Страница с заявками, статусы заявок
// Роли пользователей в проекте
// Авторизация на сайте
// Веб-интерфейс для работы с БД и занесения проектов, пакетов и атрибутов
// Реализовать последовательное прохождение комнат при выборе материалов
// Выделение активной комнаты при выборе материалов
// Материалы показывать в соответвсии с выбранным пакетом
// Сделать кнопки в виде выпадающих списков при выборе материалов
// Обновление фотографий при смене помещения и при смене материалов
// При нажатии на иконку юзера всплывающее меню с заявками всеми и выходом из аккаунта
// Режим создания заявки и режим просмотра заявки
// TEST

// Зачем нужны промисы
// Зачем нужен await и async

const express = require('express'),
      path = require('path'),
      exphbs = require('express-handlebars'),
      sequelize = require('./utils/database'),
      homeRoutes = require('./routes/home'),
      queuesRoutes = require('./routes/queues'),
      corpusesRoutes = require('./routes/corpuses'),
      floorsRouters = require('./routes/floors'),
      unitsRoutes = require('./routes/units'),
      packagesRoutes = require('./routes/packages'),
      materialsRoutes = require('./routes/materials'),
      viewingSelectedRoutes = require('./routes/viewingSelected'),
      finishRoutes = require('./routes/finish'),
      requestsRoutes = require('./routes/requests'),
      authRoutes = require('./routes/auth');

const Project = require('./models/projects/project')
const Queue = require('./models/projects/queue')
const Corpus = require('./models/projects/corpuse')
const Unit = require('./models/projects/unit')

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'))
// app.use('/public',express.static(path.join(__dirname, '..', 'public')))

app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/queues', queuesRoutes);
app.use('/corpuses', corpusesRoutes);
app.use('/floors', floorsRouters);
app.use('/units', unitsRoutes);
app.use('/packages', packagesRoutes);
app.use('/materials', materialsRoutes);
app.use('/viewingSelected', viewingSelectedRoutes);
app.use('/finish', finishRoutes);
app.use('/requests', requestsRoutes);

async function start() {
    try {
        // await sequelize.sync({
        //     force: true
        // })
        await sequelize.sync()
        
        // Project.create({name:'Magnifica', short_name:'MG'}).then(proj=>{
        //     proj.createQueue({name:'3 очередь', short_name:'3'}).then(queue1 =>{
        //         queue1.createCorpuse({name:'Корпус F1', short_name:'F1', model_link:'http:/test'}).then(corpus1 => {
        //             corpus1.createUnit({name: '1', area: 50.00, floor: 1})
        //             corpus1.createUnit({name: '2', area: 50.00, floor: 2})
        //             corpus1.createUnit({name: '3', area: 50.00, floor: 3})
        //         })
        //         queue1.createCorpuse({name:'Корпус F2', short_name:'F2', model_link:'http:/test'}).then(corpus2 => {
        //             corpus2.createUnit({name: '4', area: 50.00, floor: 1})
        //             corpus2.createUnit({name: '5', area: 50.00, floor: 1})
        //             corpus2.createUnit({name: '6', area: 50.00, floor: 1})
        //             corpus2.createUnit({name: '7', area: 50.00, floor: 1})
        //         })
        //         queue1.createCorpuse({name:'Корпус F3', short_name:'F3', model_link:'http:/test'}).then(corpus3 => {
        //             corpus3.createUnit({name: '8', area: 50.00, floor: 1})
        //             corpus3.createUnit({name: '9', area: 50.00, floor: 2})
        //             corpus3.createUnit({name: '10', area: 50.00, floor: 3})
        //             corpus3.createUnit({name: '11', area: 50.00, floor: 4})
        //         })
        //     })
        //     proj.createQueue({name:'7 очередь', short_name:'7'}).then(queue2 =>{
        //         queue2.createCorpuse({name:'Корпус F4', short_name:'F4', model_link:'http:/test'}).then(corpus5 => {
        //             corpus5.createUnit({name: '12', area: 50.00, floor: 1})
        //             corpus5.createUnit({name: '13', area: 50.00, floor: 2})
        //             corpus5.createUnit({name: '14', area: 50.00, floor: 2})
        //             corpus5.createUnit({name: '15', area: 50.00, floor: 2})
        //         })
        //         queue2.createCorpuse({name:'Корпус F5', short_name:'F5', model_link:'http:/test'}).then(corpus6 => {
        //             corpus6.createUnit({name: '16', area: 50.00, floor: 1})
        //             corpus6.createUnit({name: '17', area: 50.00, floor: 3})
        //             corpus6.createUnit({name: '18', area: 50.00, floor: 3})
        //             corpus6.createUnit({name: '19', area: 50.00, floor: 4})
        //         })
        //     })
        // })

        // Project.create({name:'GronaLund', short_name:'GL'}).then(proj=>{
        //     proj.createQueue({name:'Этап 7.1', short_name:'7.1'}).then(queue1 =>{
        //         queue1.createCorpuse({name:'Корпус A1', short_name:'A1', model_link:'http:/test'}).then(corpus1 => {
        //             corpus1.createUnit({name: '1', area: 50.00, floor: 1})
        //             corpus1.createUnit({name: '2', area: 50.00, floor: 2})
        //             corpus1.createUnit({name: '3', area: 50.00, floor: 3})
        //         })
        //         queue1.createCorpuse({name:'Корпус A2', short_name:'A2', model_link:'http:/test'}).then(corpus2 => {
        //             corpus2.createUnit({name: '4', area: 50.00, floor: 1})
        //             corpus2.createUnit({name: '5', area: 50.00, floor: 1})
        //             corpus2.createUnit({name: '6', area: 50.00, floor: 1})
        //             corpus2.createUnit({name: '7', area: 50.00, floor: 1})
        //         })
        //         queue1.createCorpuse({name:'Корпус A3', short_name:'A3', model_link:'http:/test'}).then(corpus3 => {
        //             corpus3.createUnit({name: '8', area: 50.00, floor: 1})
        //             corpus3.createUnit({name: '9', area: 50.00, floor: 2})
        //             corpus3.createUnit({name: '10', area: 50.00, floor: 3})
        //             corpus3.createUnit({name: '11', area: 50.00, floor: 4})
        //         })
        //     })
        //     proj.createQueue({name:'Этап 9.1', short_name:'9.1'}).then(queue2 =>{
        //         queue2.createCorpuse({name:'Корпус A4', short_name:'A4', model_link:'http:/test'}).then(corpus5 => {
        //             corpus5.createUnit({name: '12', area: 50.00, floor: 1})
        //             corpus5.createUnit({name: '13', area: 50.00, floor: 2})
        //             corpus5.createUnit({name: '14', area: 50.00, floor: 2})
        //             corpus5.createUnit({name: '15', area: 50.00, floor: 2})
        //         })
        //         queue2.createCorpuse({name:'Корпус A6', short_name:'A6', model_link:'http:/test'}).then(corpus6 => {
        //             corpus6.createUnit({name: '16', area: 50.00, floor: 1})
        //             corpus6.createUnit({name: '17', area: 50.00, floor: 3})
        //             corpus6.createUnit({name: '18', area: 50.00, floor: 3})
        //             corpus6.createUnit({name: '19', area: 50.00, floor: 4})
        //         })
        //     })
        // })

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch(e) {
        console.log(e);
    }
}

start()

