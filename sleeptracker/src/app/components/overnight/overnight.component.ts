import { Component, OnInit, Input } from '@angular/core';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { SleepData } from '../../data/sleep-data';
import { FirebaseService } from '../../services/firebase.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-overnight',
  templateUrl: './overnight.component.html',
  styleUrls: ['./overnight.component.scss']
  })

export class OvernightComponent implements OnInit {

@Input() startDate:string = "";
@Input() endDate:string = "";

  public toSave:OvernightSleepData;
  public today:string;
  public minimum:string;

  constructor(public alertController:AlertController, public firebaseService:FirebaseService) { }

  ngOnInit() {
  	var todayDate = new Date(Date.now());
	var monthActual = todayDate.getMonth() + 1;
	var date = this.normalizeDigit(todayDate.getDate());
	var month = this.normalizeDigit(monthActual);
	this.today = todayDate.getFullYear() + "-" + month + "-" + date + "T00:00Z";

	console.log("Today's Date:", this.today);
	this.minimum = "" + (todayDate.getFullYear() - 1);
	this.startDate = this.today;
  }

  normalizeDigit(value: number):string{
  return value < 10 ? "0" + value : "" + value;
  }
  
  async savedAlert(){
    const alert = await this.alertController.create({
      message: "Overnight Sleep Data will be logged for " + this.toSave.dateString() + ": " + this.toSave.summaryString(),
      buttons: [
        {
          text: 'OK',
          handler: () =>{
            this.firebaseService.addSleepLog(this.toSave);
	    this.clearDates();   
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
    this.startDate = this.today;
    this.endDate = "";
    this.toSave = null;
  }

  logOvernightDates(){
    if(this.startDate == "" || this.endDate == ""){
      console.log("bad input");
      this.errorAlert();
      this.clearDates();
    }
    else{
      var start = new Date(this.addOffSet(this.startDate));
      var end = new Date(this.addOffSet(this.endDate));
      if(start >= end){
        this.errorAlert();
	this.clearDates();
      }
      else{
        this.toSave = new OvernightSleepData(start, end);
        this.savedAlert();
      }
    }
  }
}
