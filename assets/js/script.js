for(var i = 9 ; i <= 17 ;i++ ){   //Created for-loop i starts at 9 and loop until no longer less than or equal too 17
  var time = "#"+i             // created time id using i (concats with html id)
  var storage;                 // storage variable it needs to be in same scoop as line 12
  if(i > 12 ){                 // if i is basically greater than 12 PM (13>will become 1PM)
    storage = i - 12 + "PM"     //takes i and subtracts 12 and add adds PM at the end.(13-12=1+PM=1PM)
  }else if (i===12){            //if i = 12 make storage 12pm
  storage = "12PM" 
  }else {
    storage = i + "AM"                   // else is for AM's (9+AM=9AM)
  }
var current = moment().hours()
console.log(current)
  $(time).children(".description").val(JSON.parse(localStorage.getItem(storage)))         // local storage get item will use time grab correct text area (Storage grabs corrrect local storage)
}
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(".saveBtn").on("click",                                       //  when you click save button
function(){                                                       // created funtion runs when you click 
var hour = $(this).siblings(".hour").text()
var description = $(this).siblings(".description").val()
var text = JSON.stringify(description)                                   //returning the info into json stringly
localStorage.setItem(hour,text)
console.log("click")

}
)