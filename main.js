$(document).ready(function(){
  $("#randTask").click(function(){
      $("#listTask li").remove();
      $.ajax({
          url:"https://jsonplaceholder.typicode.com/todos",
          datatype:"json",
          success: function(data){
              for(let x = 0; x < 10; x++){
                  let pick = Math.floor(Math.random()*data.length);
                  $("#listTask").append("<li style='color:white'> " +data[pick].title+" </li>");
  
              }
             
          }
      });
      
  });

});