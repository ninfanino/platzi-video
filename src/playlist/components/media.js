import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends Component {
	//ECMA6
	/*constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);


		//inicial para el estado
		this.state = {
			author : props.author // estado inicial
		}
	}
	handleClick(event) {
		console.log(this.props.title)
	}*/
	//ECMA7
	/*handleClick = (event) => {
		console.log(this.props.title)
	}*/

	state = {
		author : 'Ninfa Niño'
	}
	handleClick = (event) => {
		this.props.openModal(this.props);
	}
	render() {
		const styles = {
			container: {
				color: '#44546b',
				cursor: 'pointer',
				width: 260
			}
		}
		return(
			<div className="Media" onClick={this.handleClick}>
				<div>
					<img 
						src={this.props.cover}
						alt=""
						width={260}
						height={160}
						className='Media-image'
					/>
					<h3 className='Media-title'>{this.props.title}</h3>
					<p className='Media-author'>{this.props.author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;