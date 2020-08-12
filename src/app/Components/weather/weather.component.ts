import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class weatherComponent implements OnInit {

  City: String;
  WeatherData:any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
    };
    this.City = 'Panaji';
    this.getWeatherData();
  }

  getWeatherData(){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.City + '&appid=ff1bc4683fc7325e9c57e586c20cc03e';
    fetch(url)
    .then(response=>response.json())
    .then(data=>
      {
        this.setWeatherData(data);
      })
  }

  setWeatherData(data){
    this.WeatherData.cityName = data.name;
    this.WeatherData.temperatureInCelsius = (data.main.temp - 273.15).toFixed(0);
    this.WeatherData.humidity = data.main.humidity;
    this.WeatherData.weatherOverview = data.weather[0].main;
    this.WeatherData.weatherDescription = data.weather[0].description;
  }

  public handleAddressChange(address: any) {
    this.City = address.name;
    this.getWeatherData();
}

}
