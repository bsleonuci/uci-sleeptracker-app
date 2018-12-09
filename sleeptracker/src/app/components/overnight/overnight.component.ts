import { Component, OnInit, Input } from '@angular/core';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { SleepData } from '../../data/sleep-data';
import { SleepService } from '../../services/sleep.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-overnight',
  templateUrl: './overnight.component.html',
  styleUrls: ['./overnight.component.scss']
  })

export class OvernightComponent implements OnInit {

@Input() startDate:string = "";
@Input() endDate:string = "";

  constructor(public sleepService:SleepService, public alertController:AlertController) { }

  ngOnInit() {
  }

  async savedAlert(){
    const alert = await this.alertController.create({
      message: "Overnight sleep data has been saved!",
      buttons: ['OK']
    });
    
    await alert.present();
  }

  addOffSet(date: string){
    var reformatted = new Date(date).toISOString();
    var offsetStr = ""
    var offset = new Date().getTimezoneOffset() / 60;
    if(offset < 0){
      if(-offset < 10) offsetStr = "+0" + offset + ":00";
      else offsetStr = "+" + offset + ":00";
    }
    else{
      if(offset < 10) offsetStr = "-0" + offset + ":00";
      else offsetStr = "-" + offset + ":00";
    }
    var newDate = reformatted.slice(0, reformatted.length - 1) + offsetStr;
    return newDate;
  }

  clearDates(){
    this.startDate = "";
    this.endDate = "";
  }

  logOvernightDates(){
    if(this.startDate == "" || this.endDate == ""){
      console.log("bad input");
      this.clearDates();
    }
    else{
      var start = new Date(this.addOffSet(this.startDate));
      var end = new Date(this.addOffSet(this.endDate));
      var data = new OvernightSleepData(start, end);
      this.sleepService.logOvernightData(data);
      this.savedAlert();
      this.clearDates();
    }
    }
}
