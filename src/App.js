import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle";
import logo from './logo.svg';
import './App.css';
import ServicioCustomer from './components/ServicioCustomer';
import BuscadorCustomer from './components/BuscadorCustomer';
import MostrarFiltrarCoche from './components/MostrarFiltrarCoche';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import MaestroDepartamentos from './components/MaestroDetalle/MaestroDepartamentos';
import TablaMultiplicar from './components/RutasParametros/TablaMultiplicar';
import Router from './components/Router';
import MenuRutas from './components/RutasParametros/MenuRutas';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ServicioCustomer/> 
        <BuscadorCustomer/>
        <MostrarFiltrarCoche/>
        <DepartamentosEmpleados/>
        <MaestroDepartamentos/>
        <TablaMultiplicar numero="21"/>
        <TablaMultiplicar numero="1"/>
        <MenuRutas/>*/}
        <Router/>
        
      </header>
    </div>
  );
}

export default App;
