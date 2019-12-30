import React from 'react'
import Appoint from './Appoint'

const AppointList = ({ appoints, deleteAppoint }) => {
  const message = Object.keys(appoints).length === 0 ? ' No hay citas' : 'Administra las citas aquí'

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{message}</h2>
        <div className="lista-citas">
          {appoints.map(appoint => (
            <Appoint key={appoint.id} appoint={appoint} deleteAppoint={deleteAppoint} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppointList
