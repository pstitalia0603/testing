// //date object

// //get right now
// const now = new Date();
// console.log(now);

// //set a specific date and time
// //month counting starts with zero!

// const randomDate = new Date (2015,3,12,6,25,58);
// console.log(randomDate);

// //set a specific date -time set to midnight
// const win95Launch = new Date (1995,7,24);
// console.log(win95Launch);

// const now2 = new Date();
// now2.setFullYear(2014); //sets year
// now2.setMonth(3); //APril counting starts at zero
// now2.setDate(4); //sets day
// now2.setHours(4);//24 hour clock
// now2.setMinutes(24);
// now2.setSeconds(46);
// console.log(now2);

// const now3 = new Date();

// //all of the set functions have get
// console.log(now3.getMonth());

// //milliseconds since 1 Jan 1970
// console.log(now3.getTime());

// //day of the week (Sunday = 0)
// console.log(now3.getDay());

// const demoDay = new Date();
// // demoDay.setMonth(0);
// // console.log(demoDay);


// console.log(`Day of week: ${demoDay.getDay()}`);
// console.log(`Date: ${demoDay.getDate()}`);


console.log("\n***********TESTING****************\n");
//show next year if after a certain date
//i.e., new preK applications accepted in sept 2021, if after sep 1, 2020


const now = new Date();

//day formatted as mm/dd/yyyy

function getFormattedDate(date){
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/'+ year;
}

console.log(getFormattedDate(now));


// console.log(now);
// console.log(now.getMonth());
// console.log(now.getFullYear());


// console.log("Today's date: "+ getFormattedDate(now));

const currYear = now.getFullYear();

console.log(currYear);

//before 9/1/2020
//const setDate = new Date(2020,6,1);

// after 9/1/2020
// const setDate = new Date(2020,9,19);


//setDate for testing; now for live 

if (now > new Date (currYear,8,1)) {
    console.log("Today is: "+ getFormattedDate(now));
    console.log("You cannot apply until: " + getFormattedDate(new Date (currYear+1,8,1)));
 } else {
     console.log("Today is: " + getFormattedDate(now));
     console.log("You can apply until: " + getFormattedDate(new Date(currYear,8,1)));
 };

    //if today is greater than 9/1/curr year...


    //other ways to get mm/dd/yyyy

    var todayDate = new Date().toISOString().slice(0,10);
    console.log("Today's Date: "+todayDate);

    var date = new Date(); // Or your date here
    console.log("Today's Date: "+ (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());

//month
    const date2 = new Date();  // today
    const month = date2.toLocaleString('default', { month: 'long' });
    console.log("Month: "+month);

    //testing 
    const myDate = new Date();

    console.log("My Date: " +myDate.toDateString());