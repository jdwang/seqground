const Sequelize = require('sequelize');
const config = require('./config');
const _ = require('lodash');
const axios = require('axios');

const seq = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
})



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


News.findAll().then(news => {
    console.log("All users:", JSON.stringify(news, null, 4));
});




// 插入数据库
function insertData(options){

    // todo : 查重
    News.bulkCreate(options).then((p)=>{
        console.log(`created.${JSON.stringify(p)}`)
    }).catch(e=>{
        console.log(`failed:${e}`)
    })
}