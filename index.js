const Sequelize = require('sequelize');
const config = require('./config');


const seq = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
})
// console.log(seq)

// seq
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


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

News.create({
    
}).then((p)=>{
    console.log(`created.${JSON.stringify(p)}`)
}).catch(e=>{
    console.log(`failed:${e}`)
})

News.findAll().then(news => {
console.log("All users:", JSON.stringify(news, null, 4));
});