import { Component, OnInit } from '@angular/core';

import { SleepService } from '../../services/sleep.service';

import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';


@Component({
  selector: 'view-page',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  private sleepData:SleepData[] = [];
  private overnightData:OvernightSleepData[];
  private sleepinessData: StanfordSleepinessData[];

  constructor(public sleepService:SleepService) { }
  
  ngOnInit(){
  }
}
