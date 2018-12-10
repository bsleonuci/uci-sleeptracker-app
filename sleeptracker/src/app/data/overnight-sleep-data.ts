import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;

	static fromJSON(obj:{}){
		var newStart = new Date(obj["sleepStart"].seconds*1000);
		var newEnd = new Date(obj["sleepEnd"].seconds*1000);
		return new this(newStart, newEnd);
	}

	static msConvert(ms: number):string {
		return Math.floor(ms / (1000*60*60)) + " hours and " + Math.floor(ms / (1000*60) % 60) + " minutes"
	} 

	constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}

	msDifference(){
		var start = this.sleepStart.getTime();
		var end = this.sleepEnd.getTime();
		return end - start;
	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	dateString():string {
		return "" + (this.sleepStart.getMonth() + 1) + "/" + this.sleepStart.getDate() + "/" + this.sleepStart.getFullYear();
	}

	toJSON():{}{
	  	return {
		"type": "overnight",
		"sleepStart": this.sleepStart,
	  	"sleepEnd": this.sleepEnd
	  	};
	}
}
