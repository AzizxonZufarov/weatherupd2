import React from 'react';

class Weather extends React.Component {
  render() {
    return(
          <div>
            <p>Местоположение: {this.props.city}, {this.props.country}</p>
            <p>Температура: {this.props.temp}</p>
            <p>Закат солнца: {this.props.sunset}</p>
          </div>
          <div id="status">1</div>

    );
  }
}
export default Weather;
