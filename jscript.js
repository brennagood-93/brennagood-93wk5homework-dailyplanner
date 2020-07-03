// variables for date and time
const date = moment().format("MMMM Do YYYY");
const time = moment().format("HH");
console.log(date, time);
// Fill in the text for the Jumbotron
$("#currentDay").text(date);
// Create HTML elements for schedule layout
for (let i = 7; i < 19; i++) {
// <!-- Separate rows for each time block in the day -->
const timeSlot = $("<div>");
timeSlot.addClass("row");
// <!-- Column 1 for time slot -->
const columnOne = $("<div>");
columnOne.addClass("col-md-1");
// <!-- Column width 10 for event area -->
const textColumn = $("<textarea>");
textColumn.addClass("col-md-10");
// This will show if the event is past, present, future    
if (i < time){
textColumn.addClass("past");
}
else if (i === time){
textColumn.addClass("present");
}
else if (i > time){
textColumn.addClass("future");
}
// Save Button
const saveBtn = $("<button>");
saveBtn.addClass("saveBtn col-md-1");
// Append section
$(".container").append(timeSlot);
timeSlot.append(columnOne);
timeSlot.append(textColumn);
timeSlot.append(saveBtn);

if (i < 12){
columnOne.text(i + "AM");
}
else if (i === 12){
columnOne.text("12PM");
}
else if (i > 12){
columnOne.text(i - 12 + "PM");
}
}
// <!-- will need form to allow user to input text -->
    // <!-- Columns to save  --> 
// Append something
// Assign css styling by past present future time

// create save button to store users entry to locale storage
// localStorage.setItem("name", data(customer's comment))
// The time block they're entering their appointment into needs to contribute to the "name" of our locale storage item
// value attribute  of the form or button
// localeStorage.setItem(timeWindow.value)
// have whatever info is in localestorage show on the webpage












