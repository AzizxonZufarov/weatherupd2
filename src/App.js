import React from 'react';
import Info from './components/info';
import Weather from './components/Weather';
import Form from './components/form';

const API_KEY ="b55ae4efaf1ebbf7516e7e7d076c6ca4";
class App extends React.Component {
state={
  temp: undefined,
  city:undefined,
  country:undefined,
  sunrise: undefined,
  sunset:undefined,
  error:undefined
}

  gettingWeather = async (e) =>{
    e.preventDefault();
    var city = e.target.elements.city.value;
if(city){
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`);
    const data = await api_url.json();
    var sunset = data.sys.sunset;
    const kelvin = Math.round(data.main.temp);
    const celsius = Math.round(kelvin - 273,15);
    var date = new Date();
    date.setTime(sunset);
    var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    this.setState({
      temp: celsius,
      city:data.name,
      country:data.sys.country,
      sunset:sunset_date,
      error:undefined
    });
}else{
  this.setState({
    temp: undefined,
    city:undefined,
    country:undefined,
    sunset:undefined,
    error:"Enter city"
  });
}
}
  render() {
    return(
      <div className="wrapper">
      <div className="main">
      <div className="container">
      <div className="row">
      <div className="col-sm-5 info">
          <Info/>
       </div>
      <div className="col-sm-7 form">



          <Form weatherMethod={this.gettingWeather}/>
          <Weather
          temp= {this.state.temp}
          city={this.state.name}
          country={this.state.country}
          sunset={this.state.sunset}
          error={this.state.error}
          />
                  </div>
      </div>
      </div>
      </div>

      </div>
    );
  }
}
export default App;
