var input = document.getElementById("userInput");
var inputVal = input.value;

input.addEventListener('keyup', function(e) {
  e.preventDefault();
  fetchData(inputVal);
});

fetch('/search?apod')
.then(response => response.json())
.then(data => {
  var img =document.getElementById("nasa-planetary-apod-url");
   img.src = data.url;
   var explanation =document.getElementById("nasa-planetary-apod-explanation");
    explanation.src = data.explanation;
    var title =document.getElementById("nasa-planetary-apod-title");
     explanation.src = data.title;
})
.catch(error => console.error(error))
