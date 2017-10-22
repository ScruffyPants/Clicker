function click(){
  document.getElementById("info").innerHTML="1";
  console.log('press');
  return "test";
}

$("#button").click(function(){
  alert('test');
});

$("#container").on("click", function(){
  alert("test");
});
