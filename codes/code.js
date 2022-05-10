var num = 1;

function slider(){
    num = num + 1;
  if(num%2==0){
        document.getElementById('slider').style.backgroundImage= "url('/assets/201908071215319952.jpg')";
  }
  if(num%2!=0){
    
    document.getElementById('slider').style.backgroundImage= "url('/assets/32289439_1704296886313379_5497848006222807040_n.jpg')";
}
}

