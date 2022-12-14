import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class DepartamentosEmpleados extends Component {
    urlDept = Global.urlDept;
    selector = React.createRef();
    state={
        departamentos:[], 
        statusDept: false,
        statusEmpl: false,
        empleados:[]
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
        var urlEmpl = "https://apiempleadosfullstack.azurewebsites.net/api/Empleados/EmpleadosDepartamento/"+this.selector.current.value;
        axios.get(urlEmpl).then(response =>{
            this.setState({
                empleados :response.data,
                statusEmpl: true 
            })
        })
        
    }
    componentDidMount = () => {
        this.loadDept();    
    }
    render() {
        return (
            <div>
                <h1>Departamentos Empleados</h1>
                <select ref={this.selector} onClick={this.filtrarDept}>
                    {
                        this.state.statusDept == true &&
                        (this.state.departamentos.map((dept,index)=>{
                            return(
                                <option value={dept.Numero}>{dept.Nombre}</option>
                            )
                        }))
                    }
                </select>
                <ul>
                    {
                        this.state.statusEmpl == true &&
                        (this.state.empleados.map((empl,index)=>{
                            return(
                                <ul>
                                    <li value={empl.Numero}>{empl.apellido}</li>
                                </ul>
                            )
                        }))
                    }
                </ul>
            </div>
        )
    }
}
