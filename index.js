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

// Зачем нужны промисы
// Зачем нужен await и async

const express = require('express'),
      path = require('path'),
      exphbs = require('express-handlebars'),
      sequelize = require('./utils/database'),
      homeRoutes = require('./routes/home'),
      queuesRoutes = require('./routes/queues'),
      corpusesRoutes = require('./routes/corpuses'),
      authRoutes = require('./routes/auth'),
      unitsRoutes = require('./routes/units'),
      packagesRoutes = require('./routes/packages'),
      materialsRoutes = require('./routes/materials'),
      viewingSelectedRoutes = require('./routes/viewingSelected'),
      finishRoutes = require('./routes/finish'),
      requestsRoutes = require('./routes/requests');

const Project = require('./models/projects/project')
const Queue = require('./models/projects/queue')

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

app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/queues', queuesRoutes);
app.use('/corpuses', corpusesRoutes);
app.use('/units', unitsRoutes);
app.use('/packages', packagesRoutes);
app.use('/materials', materialsRoutes);
app.use('/viewingSelected', viewingSelectedRoutes);
app.use('/finish', finishRoutes);
app.use('/requests', requestsRoutes);

async function start() {
    try {
        await sequelize.sync({
            force: true
        })
        // await sequelize.sync()
        
        Project.create({name:'Magnifica', short_name:'MG'}).then(res=>{
            const projId = res.id;
            Queue.create({name:'3 очередь', short_name:'3', ProjectId: projId}).catch(err=>console.log(err));
            Queue.create({name:'7 очередь', short_name:'3', ProjectId: projId}).catch(err=>console.log(err));
        }).catch(err=>console.log(err));

        Project.create({name:'GronaLund', short_name:'GL'}).then(proj=>{
            proj.createQueue({name:'Этап 7.1', short_name:'7.1'}).catch(err=>console.log(err));
            proj.createQueue({name:'Этап 9.2', short_name:'9.2'}).catch(err=>console.log(err));
        }).catch(err=>console.log(err));

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch(e) {
        console.log(e);
    }
}

start()

