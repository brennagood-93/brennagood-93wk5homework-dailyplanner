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
// Local Storage to webpage 
textColumn.val(localStorage.getItem("button" + i));
// Save Button
const saveBtn = $("<button>");
saveBtn.addClass("saveBtn col-md-1");
saveBtn.text("Save");
saveBtn.attr("id", "button" + i);
textColumn.attr("id", "text" + i);


// Append section
$(".container").append(timeSlot);
timeSlot.append(columnOne);
timeSlot.append(textColumn);
timeSlot.append(saveBtn);

// This changes the time to either AM or PM
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
// Click target for the save button/creating variables for key value pair/Saving key value pair
$(".saveBtn").on("click", function(){
    const noteValue = $(this).siblings("textarea").val();
    const buttonId = $(this).attr("id");
    localStorage.setItem(buttonId, noteValue);
    
    
})














