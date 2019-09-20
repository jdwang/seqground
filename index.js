const Sequelize = require('sequelize');
const config = require('./config');
const _ = require('lodash');

const seq = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
})

// 验证登录
// seq
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


// 报错解决方法：ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';




const News = seq.define('news', {
    // attributes
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
// options
});



//  insert 


// insertData([
//     {
//         title:'资讯1',
//         author:'老师',
//         content:'不卑不亢就离开家'
//     },
//     {
//         title:'资讯2',
//         author:'老师',
//         content:'离开就看见'
//     },
// ])


// select  

// News.findAll({
//     attributes:['title']
// }).then(news => {
//     // console.log("All users:", JSON.stringify(news, null, 4));
//     let data  =  JSON.parse(JSON.stringify(news, null, 4));
//     for(let i = 0 ; i < data.length ; i++){

//         console.log(data[i].title)
//     }
// });



// update

News.findAll({
    attributes:['title']
}).then(news => {
    // console.log("All users:", JSON.stringify(news, null, 4));
    let data  =  JSON.parse(JSON.stringify(news, null));
    for(let i = 0 ; i < data.length ; i++){

        console.log(data[i].title)
    }
});


// delete 



// 插入数据库
function insertData(options){

    // todo : 查重
    News.bulkCreate(options).then((p)=>{
        console.log(`created.${JSON.stringify(p)}`)
    }).catch(e=>{
        console.log(`failed:${e}`)
    })
}