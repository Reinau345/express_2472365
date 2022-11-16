const express = require('express')
const app= express()
const hbs = require('hbs')
const port= process.env.PORT // Definir el puerto

app.use(express.static('public'));

hbs.registerPartials(__dirname + '/public/views/partials',function(err){});
app.set('view engine','hbs');
app.set('views', __dirname +'/public/views');

app.get('/',(req,res)=>{
   // res.send('Hola Mundo')
   res.render('registrarPedido',{
    nombre:'Registrar Pedido'
   })
})



app.get('/moduloClientes',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('moduloClientes',{
   nombre:'Clear Cliente'
  })
})

app.get('/registrarPedido',(req,res)=>{

  res.sendFile(__dirname +'/public/views/registrarPedido.html');
})

app.listen(port, () =>{
    console.log(`Escuchando por el puerto ${port}`)

})




































































