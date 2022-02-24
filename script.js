var $addButton = $(".btn-primary");
var $removeButton = $(".btn-danger");
var $todoList = $(".uncompleted");
var $doneList = $(".completed");


// <li> to Todo List
 $addButton.on("click", function(){
  
  //Creating Variables 
  var $newTask = $(".newTask").val();
  var $taskDate = $(".task-date").val();
  var $importance = $("btn.importance").val();
  var $newTaskString = $newTask + "  " + $taskDate + "  " + $importance; 
  var $todoList = $(".uncompleted");
  
   //call method on $todoList
   
  $todoList.append("<li>" + $newTaskString + "<button><span> Done</span></button></li>").addClass("todo");
  
  //Styles for button DOM
  var $span = $(".todo button span");
  var $button = $(".todo button");
  $button.addClass("btn btn-success");
  $span.addClass("glyphicon glyphicon-ok"); 
  $("input").val("");
   
 })
 
 // After click Successs
 
  var $doneButton = $(".btn-success");
   

   $(".uncompleted").on("click", ".btn-success", function(){
   var $completedTask = $( this ).parent("li").text();
   $(this).parent("li").remove();
   $doneList.append("<li>" + $completedTask + "<button><span> Remove</span></button></li>").addClass("done");
   $(".done button").addClass("btn btn-danger");
   $(".done button span").addClass("glyphicon glyphicon-remove");
   
 })

 
 //Clear tasks
 
 $(".completed").on("click",'.btn-danger',function(){  
   $(this).parent("li").remove();
   
 })