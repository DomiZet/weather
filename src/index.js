import React from 'react';
import ReacDOM from "react-dom";
import WeatherDisplay from "./WeatherDisplay";
import Spinner from './Spinner';


class App extends React.Component {

  state = { lat: null, errorMessage: '' };
  

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState ({errorMessage: err.message})
    );
  }


  renderContent () {

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <WeatherDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept loacation request" />;

  }
    

  render () {
    
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );

  }


}



ReacDOM.render(
  <App />,
  document.querySelector('#root')
);