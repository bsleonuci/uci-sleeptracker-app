import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.component.html',
  styleUrls: ['./sleepiness.component.scss']
})
export class SleepinessComponent implements OnInit {

  private chosenValue:number = 1;
  public toSave:StanfordSleepinessData = null;


  constructor(public alertController:AlertController, public firebaseService:FirebaseService) { }

  ngOnInit() {
    
  }
  
  async savedAlert(){
    const alert = await this.alertController.create({
      message: "Sleepiness Data will be saved as: " + this.toSave.dateString() + ": " + this.toSave.summaryString(),
      buttons: [
        {
          text: 'OK',
          handler: () =>{
            this.firebaseService.addSleepLog(this.toSave);
	    this.chosenValue = 1;
	    this.toSave = null;
	  }
        },
        {
          text: 'Cancel',
          handler: () =>{
	    this.cancelAlert();
	    this.toSave = null;
          }
        }
      ]
    });
    
    await alert.present();
  }

  async cancelAlert(){
    const alert = await this.alertController.create({
      message: "Save cancelled!",
      buttons: ['OK']
    });
    
    await alert.present();
  }
  
  async errorAlert(){
    const alert = await this.alertController.create({
      message: "Invalid sleep data provided! Data not saved.",
      buttons: ['OOPS']
    });

    await alert.present();
  }

  get sleepinessOptions(){
    return StanfordSleepinessData.ScaleValues;
  }

  logSleepiness(){
    if(this.chosenValue == 0){
      this.errorAlert();
    }
    else{
      var date = new Date(Date.now());
      this.toSave = new StanfordSleepinessData(this.chosenValue, date);
      this.savedAlert();
    }
  }

}
