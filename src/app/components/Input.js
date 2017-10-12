import React from "react";
import {Link} from "react-router-dom";


class Parks extends React.Component{
	state = {
		parks: []
	}
	render(){
		var parks = this.state.parks;
		parks = parks.map(function(park, index){
			return(
				<Link to={`/park-display/${park.obj.name}`} key={index}>
					<li>
						<span className="name">{park.obj.name}</span>
						<span className="dist">{Math.floor(park.dis / 1000)} km</span>
					</li>
				</Link>
			);
		}); 
		return(
			<div id="park-container">
				<h1 className="title">Illinois State Parks</h1>
				<div id="homepage">
				<h1>Find Parks Close to You!</h1>
				<form id="search" onSubmit={this.handleSubmit.bind(this)}>
					<label>Enter your Zip Code:</label>
					<input type="text" ref="zip" placeholder="zip code" required />
					<input type="submit" value="Find Parks" />
				</form>
				<ul>{parks}</ul>
			</div>
			</div>
		);
	}
	handleSubmit = e => {
		e.preventDefault();
		var zip = this.refs.zip.value;
		fetch('../api/parks?zip=' + zip).then(data => {
			return data.json();
		}).then( json => {
			this.setState({
				parks: json
			});
			console.log(json);
		}).catch(function(x) {
			console.log(x)
			console.warn(x.responseText)
		})
	}
};

export default Parks