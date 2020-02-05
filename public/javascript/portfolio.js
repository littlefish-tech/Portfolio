$(document).ready(function(){

  getProjects()

  function getProjects(){
    $.get("/api/portfolio", function(data){
console.log("Portfolio", data)

    })
  }

  var projectContainer = $(".projectContainer");
  function initializeProjectRow(){
    var projectsToAdd = [];

  }
})