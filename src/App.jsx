import React from 'react' //importa react
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/menu/Navbar';
import RoutesApp from './routes/RoutesApp';



//import CounterApp from './components/CounterApp';
//import MoviesApp from './components/MoviesApp'
//import IntroApp from './components/ciclo_vida/IntroApp'


const App = () => { //función de flechas
  const valorIniciar = 10;
  const mensaje = 'Esto es un contador'
  //const alumno= 'Kim Namjoon'
  //va todo lo que sea javascript

  return (
    //todo lo que sea JSX(html)
   <div className="container">
    <div className="row">
      <div className="col">
        <img src="" alt="" />
       <h1>Intro App</h1>
        <hr />
      {/*<MoviesApp />*/}
      {/*<CounterApp valor={valorIniciar} mensaje ={mensaje} />*/}
      {/*<IntroApp/>*/}
      <BrowserRouter>
      <Navbar />
      <RoutesApp />
      </BrowserRouter>
      </div>
    </div>
   </div>
  )
}

export default App; 