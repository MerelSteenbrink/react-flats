import React, {Component} from 'react';

class Flat extends Component {
	render(){
		const styling = { backgroundImage:  `url( ${this.props.imageUrl })`};
		return (
			<div className="card" style={styling}>
  			<div className="card-category">{this.props.price + ' ' + this.props.priceCurrency }</div>
  			<div className="card-description">
    			<h2>{this.props.name}</h2>
 				 </div>
 			</div>
		)
	}
}

export default Flat;