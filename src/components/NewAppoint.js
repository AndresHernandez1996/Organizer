import React, { Component } from 'react'
import uuid from 'uuid'

const stateInicial = {
  appoint: {
    bendi: '',
    paps: '',
    fecha: '',
    hora: '',
    sintomas: ''
  },
  error: false
}

class NewAppoint extends Component {
  state = { ...stateInicial }

  handleChange = e => {
    this.setState({
      appoint: {
        ...this.state.appoint,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { bendi, paps, fecha, hora, sintomas } = this.state.appoint

    if (!bendi || !paps || !fecha || !hora || !sintomas) {
      this.setState({
        error: true
      })
      return
    }
    const newAppoint = { ...this.state.appoint }
    newAppoint.id = uuid()

    this.props.createNewAppoint(newAppoint)

    this.setState({ ...stateInicial })
  }

  render() {
    const { error } = this.state

    const { appoint } = this.state
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Llena el formulario para crear una cita</h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre de la bendición</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bendi"
                  name="bendi"
                  onChange={this.handleChange}
                  value={appoint.bendi}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre del paps</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Paps"
                  name="paps"
                  onChange={this.handleChange}
                  value={appoint.paps}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={appoint.fecha}
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={appoint.hora}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Chorro, vómito, etc..."
                  onChange={this.handleChange}
                  value={appoint.sintomas}></textarea>
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar cita"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default NewAppoint
