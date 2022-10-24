import logo from './logo.svg';
import './App.css';
import ServicioCustomer from './components/ServicioCustomer';
import BuscadorCustomer from './components/BuscadorCustomer';
import MostrarFiltrarCoche from './components/MostrarFiltrarCoche';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ServicioCustomer/> 
        <BuscadorCustomer/>
        <MostrarFiltrarCoche/>*/}
        <DepartamentosEmpleados/>
      </header>
    </div>
  );
}

export default App;
