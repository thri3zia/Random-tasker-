// generator = () => {

  


// const api = "https://jsonplaceholder.typicode.com/todos"

// async function getToDo(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     const { title } = data;
    
//     document.getElementById('but').textContent = title;
    

//     return response.json();
// }
// getToDo();

$(document).ready(function () {
  function data() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/",
        dataType:"jsonp",

        succces: function(data){
            let move = 0;
            while (move < 10){
                index = Math.floor(Math.random()*10);
            }
            console.log('success',data)                   
        },
    });

  }
  data();

  $("#btn").on("click", function () {
    data();
  });
});