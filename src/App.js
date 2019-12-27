import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import NewAppoint from './components/NewAppoint'

export default class App extends Component {
	state = {}
	render() {
		return (
			<div className="container">
				<Header title="ADMINISTRADOR DE PACIENTES" />
				<div className="row">
					<div className="col-md-10 mx-auto">
						<NewAppoint />
					</div>
				</div>
			</div>
		)
	}
}
