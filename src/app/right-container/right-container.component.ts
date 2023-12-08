import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {

  constructor(public weatherService:WeatherService){
    
  }


  // faIcons for thumbs-up and thumbs-down and smile down
  faThumbsUp:any=faThumbsUp;
  faThumbsDown:any=faThumbsDown;
  faFaceSmile:any=faFaceSmile;
  faFaceFrown:any=faFaceFrown;

  // Functions to control tab values or tab status

  
  //function for click of today's tab
  onTodayClick() {
    this.weatherService.today = true;
    this.weatherService.week = false;
  }
  //function for click of week's tab

  onWeekClick() {
    this.weatherService.week = true;
    this.weatherService.today = false;
  }



  // function to control metric values


  //function for click of celsius's tab
  onCelsiusClick() {
    this.weatherService.celsius = true;
    this.weatherService.fahrenheit = false;
  }
  //function for click of fahrenheit's tab

  onFahrenheitClick() {
    this.weatherService.fahrenheit = true;
    this.weatherService.celsius = false;
  }

}
