import React, {Component} from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
	render(){
		return <div className="flat-list">
			{this.props.flats.map((flat, index) => {
				return <Flat name={flat.name}
					price={flat.price}
					priceCurrency={flat.priceCurrency}
					imageUrl={flat.imageUrl}
					key= {index}
					selected={flat.name === this.props.selectedFlat.name}
					selectFlat={this.props.selectFlat}
				/>
			})}
		</div>
	}
};

export default FlatList;