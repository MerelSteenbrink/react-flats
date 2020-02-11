import React, {Component} from 'react';
import flats from '../data/flats.js';
import Flat from './flat.jsx';

class FlatList extends Component {
	render(){
		console.log(flats);
		return <div className="flat-list">
		{flats.map((flat, i) => {
			return <Flat name={flat.name}
				price={flat.price}
				priceCurrency={flat.priceCurrency}
				imageUrl={flat.imageUrl}
				key= {i}
			/>
		})}
		</div>
	}
};

export default FlatList;