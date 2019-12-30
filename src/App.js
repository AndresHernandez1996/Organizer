import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import NewAppoint from './components/NewAppoint'
import AppointList from './components/AppointList'

export default class App extends Component {
  state = {
    appoint: []
  }

  componentDidMount() {
    const lSAppoints = localStorage.getItem('appoint')
    if (lSAppoints) {
      this.setState({
        appoint: JSON.parse(lSAppoints)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('appoint', JSON.stringify(this.state.appoint))
  }

  createNewAppoint = datos => {
    console.log(datos)
    const appoint = [...this.state.appoint, datos]

    this.setState({ appoint })
  }

  deleteAppoint = id => {
    const actualAppoints = [...this.state.appoint]

    const appoint = actualAppoints.filter(appoint => appoint.id !== id)

    this.setState({ appoint })
  }

  render() {
    return (
      <div className="container">
        <Header title="ADMINISTRADOR DE PACIENTES" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppoint createNewAppoint={this.createNewAppoint} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <AppointList appoints={this.state.appoint} deleteAppoint={this.deleteAppoint} />
          </div>
        </div>
      </div>
    )
  }
}
