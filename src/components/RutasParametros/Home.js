import React, { Component } from 'react'
import home from './../../assets/images/home.png'

export default class Home extends Component {
  render() {
    return (
        <div>
            <h1>Home</h1>
            <img src={home}/>
        </div>
    )
  }
}
