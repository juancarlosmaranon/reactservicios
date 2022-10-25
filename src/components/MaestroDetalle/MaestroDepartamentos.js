import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import MaestroEmpleados from './MaestroEmpleados';

export default class MaestroDepartamentos extends Component {
    urlDept = Global.urlDept;
    selector = React.createRef();
    state={
        departamentos:[], 
        statusDept: false,
        idDepartamento :0
    }
    loadDept=()=>{
        axios.get(this.urlDept).then(response =>{
            console.log(response.data);
            this.setState({
                departamentos: response.data,
                statusDept: true  
            });
        })
        
    }
    filtrarDept=(e)=>{
        e.preventDefault();
        var idDept = this.selector.current.value;
        this.setState({
            idDepartamento : idDept
        })
    }
    componentDidMount = () => {
        this.loadDept();    
    }
    render() {
        return (
            <div>
                <h1>Departamentos Empleados</h1>
                <select ref={this.selector} onChange={this.filtrarDept}>
                    {
                        this.state.statusDept == true &&
                        (this.state.departamentos.map((dept,index)=>{
                            return(
                                <option value={dept.Numero}>{dept.Nombre}</option>
                            )
                        }))
                    }
                </select>
                <h2 style={{color:"red"}}>Departamento seleccionado:</h2>
                    {
                        (this.state.idDepartamento != 0) &&
                        (<MaestroEmpleados iddepartamento={this.state.idDepartamento}/>)
                    }
            </div>
        )
    }
}
