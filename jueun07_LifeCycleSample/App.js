import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor(){
	return '#'+Math.floor(Math.Random()*16777215).toString(16);
}

class App extends Component {
	state={
		color:'#000000'
	}

	handleClick=()=>{
		this.setState({
			color:getRandomColor()
		});
	}
  render() {
    return (
		<button onClick={this.handleClick}>랜덤 색상</button>
      <LifeCycleSample color={this.state.color}/>
    );
  }
}

export default App;
