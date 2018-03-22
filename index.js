const express = require('express')
const app = express()
app.use(express.static('public')) 
app.get('/', (req, res) => res.sendFile('index.html',{root: '.'}))
app.get('/phaser3', (req, res) => res.sendFile('phaser3.html',{root: '.'}))
app.get('/json/:type', (req, res) => {
  console.log(req.params.type)
  let data = {}
  switch(req.params.type){
   case "dog": 
    data.name = 'Fido'
    data.sound = 'bark'
    break
   case "cat":
    data.name = 'Marissa'
    data.sound = 'meow'
    break
   case "bird":
    data.name = 'Tweety'
    data.sound = 'chirp'
    break
   default:
    data.name = 'NONAME'
    data.sound = 'NOSOUND' 
  }
  res.send(data)
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
