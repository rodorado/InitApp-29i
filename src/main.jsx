//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.bundle'
//import './index.css'

/*ReactDOM.createRoot(document.getElementById('root')).render(
  React.StrictMode>
    <App />
  </React.StrictMode>
)*/

/*Promesas (OMG COMO LA CANCIÓN DE JIMIN 😭😭): Son una petición que yo estoy haciendo
asincrónica donde después de un lapso de tiempo tiene que devolverme la respuestas al servidor
y yo pueda mostrarle al usuario*/

const promiseByJimin =()=>{
 return new Promise((resolve, reject)=>{
   
  let stream = true //respuesta de army (servidor)

  setTimeout(()=>{
     if(stream){
      resolve('La promesa se hizo correctamente 💜')
     }else{
      reject('Error en la petición, no hacen stream 😡')
     }
  }, 2000)
 })
}

promiseByJimin().then((parkJimin)=>{
  console.log(parkJimin)
}).catch(error=>console.log(error));

//Fetch API

const getGifRandom=async()=>{
  
  try{
    const resp= await fetch('https://api.giphy.com/v1/gifs/random?api_key=aHPTnDsrVbG5iOJEcACL4x4Hwgz2ueIx')
    const {data} = await resp.json();
  
    return data

  }catch(error){
    console.log(error);
  }
}

getGifRandom().then((respuesta)=>{
  //console.log(respuesta)
  const {url} = respuesta.images.original;
  console.log(url)
})