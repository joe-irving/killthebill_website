const update = () => {
  var values = $('form.keywords').serializeArray();
  var possibleValues = values[0].value.split(" ");
  var show = [];
  for (i in values){
    if (i != 0){
      show.push(values[i].name)
    }
  }
  for (i in possibleValues){
    if (show.includes(possibleValues[i])){
      $("."+possibleValues[i]).show();
    }else{
      $("."+possibleValues[i]).hide()
    }
  }
}

$( document ).ready(function(){
  $(".keywords").click(function(){
    update()
  })
})
