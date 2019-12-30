import React from 'react'

const Appoint = ({ appoint, deleteAppoint }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0"> {appoint.bendi}</h3>
      <p className="card-text">
        <span>Nombre del Paps:</span> {appoint.paps}
      </p>
      <p className="card-text">
        <span>Fecha:</span> {appoint.fecha}
      </p>
      <p className="card-text">
        <span>Hora:</span> {appoint.hora}
      </p>
      <p className="card-text">
        <span>Sintomas:</span>
      </p>
      <p className="card-text"> {appoint.sintomas}</p>
      <button className="btn btn-danger" onClick={() => deleteAppoint(appoint.id)}>
        Borrar &times;
      </button>
    </div>
  </div>
)

export default Appoint
