import { Component, OnInit } from '@angular/core';

import { SleepService } from '../../services/sleep.service';

import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.component.html',
  styleUrls: ['./sleepiness.component.scss']
})
export class SleepinessComponent implements OnInit {

  private chosenValue = 0;

  constructor(public sleepService:SleepService, public alertController:AlertController) { }

  ngOnInit() {
    
  }
  
  async savedAlert(){
    const alert = await this.alertController.create({
      message: "Sleepiness data has been saved!",
      buttons: ['OK']
    });
    
    await alert.present();
  }

  get sleepinessOptions(){
    return StanfordSleepinessData.ScaleValues;
  }

  logSleepiness(){
  if(this.chosenValue == 0){
  }
  else{
    console.log(this.chosenValue);
    var date = new Date(Date.now());
    console.log(date);
    var data = new StanfordSleepinessData(this.chosenValue, date);
    this.sleepService.logSleepinessData(data);
    this.savedAlert();
    this.chosenValue = 0;
  }
  }

}
