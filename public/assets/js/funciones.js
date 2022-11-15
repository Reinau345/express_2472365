
/*
const calcularSubtotal= ()=> {
     const cantidad = document.querySelector('#cantidad')
     const precio = document.querySelector('#precio')
     let subtotal= document.querySelector('#Subtotal')
     subtotal.value= cantidad.value * precio.value
     //alert(77777777777)
}

const cantidad = document.querySelector('#cantidad')
cantidad.addEventListener('keypress',calcularSubtotal)
cantidad.addEventListener('keyup',calcularSubtotal)
cantidad.addEventListener('keydowm',calcularSubtotal)

const registrarPedido=()=>{
    const cantidad= document.querySelector('#cantidad')
    const precio= document.querySelector('#precio')
    if (cantidad.value.length == 0 || precio.value.length == 0){
        document.getElementById('respuesta').innerHTML='La cantidad o el precio no pueden estar vacios'
    }
    else{
        document.getElementById('respuesta').innerHTML='Transacción exitosa'
    }


}
 const btnRegistrar = document.querySelector('#btnRegistrar')
 btnRegistrar.addEventListener('click',registrarPedido)
*/

 const registrarCliente=(e)=>{
    e.preventDefault();
    console.log("hola")
    const nombre= document.querySelector('#nombre')
    const apellido= document.querySelector('#apellido')
    const identificacion= document.querySelector('#identificacion')
    const telefono= document.querySelector('#telefono')
    const direccion= document.querySelector('#direccion')
    const departamento= document.querySelector('#departamento')
    const ciudad= document.querySelector('#ciudad')
    const camara= document.querySelector('#camara')
    const correo= document.querySelector('#correo')
    //const nit= document.querySelector('#nit')
    if (nombre.value.length == 0 || apellido.value.length == 0 || 
    identificacion.value.length == 0 || telefono.value.length == 0 ||
    direccion.value.length == 0 || departamento.value.length == 0 ||
    ciudad.value.length == 0  || camara.value.length == 0 || correo.value.length == 0 ){
    document.getElementById('respuesta').innerHTML='Todos los campos deben estar diligenciados'
         alert('Todos los campos deben estar diligenciados')
    }
    else{
        document.getElementById('respuesta').innerHTML='Inscripción  exitosa'
        alert('Inscripción  exitosa')
    }


}
 const btnRegistrarCliente = document.querySelector('#btnRegistrarCliente')
 btnRegistrarCliente.addEventListener('click',registrarCliente)
