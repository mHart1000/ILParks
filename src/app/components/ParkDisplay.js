import React from "react";

class ParkDisplay extends React.Component{
	state = {
		park: [{}]
	}
	
	componentDidMount() {
		let name = window.location.href.split("/").pop()
		fetch('../api/parks/' + name).then(data => {
			return data.json();
		}).then( json => {
			this.setState({
				park: json
			});
		})
	}
	
	render(){
		let park = this.state.park[0]
		console.log(park.activities)
		let activities = park.activities
			console.log(activities)

		if(activities) {
			activities = activities.map(function(key, index){
				return (
					<li key={index}>
						<img src={"/media/" + key + ".png"}/>
					</li>
				)
				
			})
			console.log(activities)
		}
		return(
			<div id="park-container">
				<h1 className="title">{park.name}</h1>
				<img src={park.image_url}/>
				<p>{park.address}</p>

				<div id="display">
					<p>{park.description}</p>
					<ul>{activities}</ul>
				</div>
			</div>
		);
	}
};




export default ParkDisplay
