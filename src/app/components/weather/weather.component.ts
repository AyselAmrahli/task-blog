import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  
  weather: Object;
  loading: boolean = true;

  constructor(
    public weatherServuce: WeatherService
  ) { }

  ngOnInit() {


    this.weatherServuce.getCurrentWeather()
    .subscribe(response => {
      this.weather = response.body,
      this.loading = false;
    },
      error => {
        console.log(error)
      })

  }

}
