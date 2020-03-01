import React, {Component} from 'react';

class Flat extends Component {
	handleClick = () => {
		this.props.selectFlat(this.props.name);
	}

	render(){
		const styling = { backgroundImage:  `url( ${this.props.imageUrl })`};
		return (
			<div className={`card ${this.props.selected ? "selected" : "" }` } style={styling}>
  				<div className="card-category">{this.props.price + ' ' + this.props.priceCurrency }</div>
  				<div className="card-description">
    				<h2>{this.props.name}</h2>
 				</div>
    			<a className="card-link" href="#" onClick={this.handleClick}></a>
 			</div>
		)
	}
}

export default Flat;