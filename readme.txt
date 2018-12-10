--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--

1. How long, in hours, did it take you to complete this assignment?
	It took me roughly 10 hours to complete this assignment.


2. What online resources did you consult when completing this assignment? (list specific URLs)
	https://www.w3schools.com/jsref/jsref_tofixed.asp
	https://www.w3schools.com/jsref/jsref_obj_date.asp
	https://www.w3schools.com/jsref/jsref_obj_array.asp
	https://beta.ionicframework.com/docs/api/alert/
	https://beta.ionicframework.com/docs/api/datetime
	https://stackoverflow.com/questions/15300234/how-can-i-horizontally-center-a-button-element-in-a-div-element
	https://beta.ionicframework.com/docs/api/tab-button
	https://beta.ionicframework.com/docs/api/item-divider
	https://beta.ionicframework.com/docs/layout/css-utilities/

3. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
	I did not consult any other individuals as part of or regarding this assignment. 


4. Is there anything special we need to know in order to run your code?
	There should not be anything special neceesary to run the code.


--Aim for no more than a few sentences for each of the following questions.--


5. Did you design your app with a particular type of user in mind? If so, whom? Did you design your app specifically for iOS or Android, or both?
	I did not design my app with a particular demographic in mind, but I did attempt to make the interface as 
	simple as possible to allow for a wider audience.


6. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
	A person can log overnight sleep in my app by simply entering the full date, down to hours and minutes, 
	that they went to bed. They then do the same for when they woke up. Once they have selected the dates, 
	they can hit "save" to log the dates. I decided to support logging this way because it is simple, and 
	people can usually remember at least approximately when they went to sleep and when they woke up. It 
	allows users the flexibility to even perhaps log naps during a single day, or retroactively log days 
	that they might want to record but may have forgotten.


7. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
	A person can log sleepiness during the day by simply navigating to the "sleepiness" tab, selecting a radio 
	button for feeling that best describes them, and then hitting the "save" button. The date is automatically 
	appended based on today's date. I did this because I intended for this option to be more of an "in the moment"
	log than simply logging hours slept. I chose to log sleepiness this way because it is fast and easy, and 
	it would enable users to quickly go to the tab, log how they feel, and then go back to their day with 
	almost no interruption. 


8. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
	A person can view the data they logged by navigating to the "Data" tab in the app. This tab is also the 
	default starting screen of the app, and it is updated in real time as the users adds logs. It presents a 
	list of the Overnight Sleep Data first, showing the date and then the time slept for that date in hours and 
	minutes. Below this list is the Sleepiness Data, which shows the date the sleepiness data was logged and then
	the option they chose to describe their feelings. I chose to support viewing logged data this way because
	it gives the user a quick overview of all their logs, and it provides a good start screen for the app so 
	that the user can view useful information right away.


9. Which feature did you add for A5--using a native device resource, backing up logged data to Firebase, or both? If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
	I added firebase support to back up logged data.


10. Did you add any "extra" features, such as other data to log, changes to the styling of the app? If so, what did you add? How do these add to the experience of the app?
	I changed the styling of the app to primarily darker backgrounds so that the app would more comfortable to use 
	in the dark. I also made the buttons larger and changed some colors for a more unique appearance. I also added
	varioud error prevention techniques such as cancel options for logging data, and some default datetime/radiobutton 
	values to enhance usability.
