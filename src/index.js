import React from 'react';
import ReacDOM from "react-dom";


class App extends React.Component{

    render () {
      
      window.navigator.geolocation.getCurrentPosition(
          position => console.log(position),
          err => console.log(err)
      );

      return <div>Latitude: </div>;

    }

}


ReacDOM.render(
  <App />,
  document.querySelector('#root')
);