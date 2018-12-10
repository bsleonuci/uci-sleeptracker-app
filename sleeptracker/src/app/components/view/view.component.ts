import { Component, OnInit, Input } from '@angular/core';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { SleepData } from '../../data/sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { SleepService } from '../../services/sleep.service';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public subscriber;
  public averageOvernight:string = "";
  public averageSleepiness:string = "";
  public overnightData:OvernightSleepData[] = [];
  public sleepinessData:StanfordSleepinessData[] = [];

  constructor(public sleepService:SleepService, public firebaseService:FirebaseService) { }

  ngOnInit() {
  this.subscriber = this.firebaseService.getSleepLogs().subscribe((array) => {
  	this.overnightData = [];
	this.sleepinessData = [];
  	array.forEach((obj) =>{
		if(obj.type == "overnight"){
			var newOvernight = OvernightSleepData.fromJSON(obj);
			console.log(newOvernight);
			this.overnightData.push(newOvernight);
		}
		if(obj.type == "sleepiness"){
			var newSleepiness = StanfordSleepinessData.fromJSON(obj);
			console.log(newSleepiness);
			this.sleepinessData.push(newSleepiness);
		}
		});
	this.averageOvernight = this.aggregateOvernight();
	this.averageSleepiness = this.aggregateSleepiness();
  });
  }

  aggregateOvernight():string{
    var count:number = 0;
    var total:number = 0;
    this.overnightData.forEach((data) =>{
      total = total + data.msDifference();
      count = count + 1;
    });
    var average = total / count;
    return OvernightSleepData.msConvert(average);
  }

  aggregateSleepiness():string{
    var count:number = 0;
    var total:number = 0;
    this.sleepinessData.forEach((data) =>{
      total = total + data.getValue();
      count = count + 1;
    });
    var average = total / count;
    return "" + average.toFixed(2);
  }
}
