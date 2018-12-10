/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

import { SleepData } from './sleep-data';

export class StanfordSleepinessData extends SleepData {
	public static ScaleValues = [undefined,//Sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7

	private loggedValue:number;
	
	static fromJSON(obj:{}){
		var newValue = obj["loggedValue"];
		var newAt = new Date(obj["loggedAt"].seconds*1000);
		return new this(newValue, newAt);
	}

	getValue():number{
	  return this.loggedValue;
	}

	constructor(loggedValue:number, loggedAt:Date = new Date()) {
		super();
		this.loggedValue = loggedValue;
		this.loggedAt = loggedAt;
	}

	summaryString():string {
		return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
	}

	toJSON():{}{
		return {
		"type": "sleepiness",
		"loggedValue": this.loggedValue,
		"loggedAt": this.loggedAt
		};
	}

	fromJSON(json:{}){
		this.loggedValue = json["loggedValue"];
		this.loggedAt = new Date(json["loggedAt"].seconds*1000);
	}
}
