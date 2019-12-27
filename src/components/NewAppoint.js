import React, { Component } from 'react'

class NewAppoint extends Component {
  state = {
    appoint: {
      bendi: '',
      paps: '',
      fecha: '',
      hora: '',
      sintomas: ''
    }
  }
  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Llena el formulario para crear una cita</h2>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre de la bendición</label>
              <div className="col-sm-8 col-lg-10">
                <input type="text" className="form-control" placeholder="Bendi" name="bendi" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre del paps</label>
              <div className="col-sm-8 col-lg-10">
                <input type="text" className="form-control" placeholder="Paps" name="paps" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input type="date" className="form-control" name="fecha" />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input type="time" className="form-control" name="hora" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Chorro, vómito, etc..."></textarea>
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
