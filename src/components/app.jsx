import React, {Component} from 'react'
import FlatList from './flat-list.jsx'
import SimpleMap from './simple-map.jsx'
import flats from '../data/flats.js';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats: flats
    };
  }

selectFlat = (name) => {
	const selectedFlat = this.state.flats.filter(flat => flat.name === name)[0];
	this.setState({selectedFlat: selectedFlat})
}

	render(){
		console.log(this.state);
		return (
			<div>
				<div className="flat-list">
					<FlatList 
						flats={this.state.flats}
						selectedFlat={this.state.selectedFlat}
						selectFlat={this.selectFlat}
					/>
				</div>
				<div className="map-container">
					<SimpleMap/>
				</div>
			</div>
		)
	}

}

export default App