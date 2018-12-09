import { Component, OnInit, Input } from '@angular/core';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { SleepData } from '../../data/sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(public sleepService:SleepService) { }

  ngOnInit() {
  }

  get overnightData(){
    return SleepService.AllOvernightData;
  }

  get sleepinessData(){
    return SleepService.AllSleepinessData;
  }
}
