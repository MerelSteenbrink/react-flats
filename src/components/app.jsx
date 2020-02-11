import React, {Component} from 'react'
import FlatList from './flat-list'

class App extends Component {
	render(){
		return (
			<div>
				<div className="flat-list">
					<FlatList/>
				</div>
				<div className="map-container">
					<p> this is the map </p>
					<a className="card-link" href="#"></a>
				</div>
			</div>
		)
	}

}

export default App