
// (async ()=>{
//     const { send } = require('micro')
//     const url = require('url')
//     const level = require('level')

//     const db = await level('visit',{
//         valueEncoding:'json'
//     })

//     // await db.put('a','1')
//     console.log(await db.get('a'))
// })()


const { send } = require('micro')
const url = require('url')
const level = require('level')



console.log('start')
const db = level('visit.db',{
    valueEncoding:'json'
})

module.exports = async (req, res) => {
    // res.end('Welcome to Micro')
    console.log('reques')

    const { pathname } = url.parse(req.url)
    let visitNum = 0;

    try{
        visitNum = await db.get(pathname);
    }catch(e){
        if (e.notFound) {
            await db.put(pathname,1)
            visitNum = 0;
        }
    }
    await db.put(pathname,visitNum+1)
    send(res, 200, `This page has been visited for ${visitNum+1} times`)
}
