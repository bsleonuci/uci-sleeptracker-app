import * as shortid from 'shortid';

export abstract class SleepData {
	id:string;
	loggedAt:Date;

	constructor() {
		//Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
		this.id = shortid();
		this.loggedAt = new Date();
	}

	summaryString():string {
		return 'Unknown sleep data';
	}

	dateString():string {
		return "" + (this.loggedAt.getMonth() + 1) + "/" + this.loggedAt.getDate() + "/" + this.loggedAt.getFullYear();
	}

	abstract toJSON():{};

}
