var flag = false;
var cur = {
  x:0,
  y:0
}
var nx,ny,dx,dy,x,y ;
function down(){
  flag = true;
  var touch ;
  if(event.touches){
    touch = event.touches[0];
  }else {
    touch = event;
  }
  cur.x = touch.clientX;
  cur.y = touch.clientY;
  dx = div2.offsetLeft;
  dy = div2.offsetTop;
}
function move(){
  if(flag){
    var touch ;
    if(event.touches){
      touch = event.touches[0];
    }else {
      touch = event;
    }
    nx = touch.clientX - cur.x;
    ny = touch.clientY - cur.y;
    x = dx+nx;
    y = dy+ny;
    div2.style.left = x+"px";
    div2.style.top = y +"px";
    //阻止页面的滑动默认事件
    document.addEventListener("touchmove",function(){
      event.preventDefault();
    },false);
  }
}

var div2 = document.getElementById("eventdetail");
div2.addEventListener("mousedown",function(){
  console.log(this)
  down(this);
},false);
div2.addEventListener("touchstart",function(){
  down(this);
},false)
div2.addEventListener("mousemove",function(){
  move(this);
},false);
div2.addEventListener("touchmove",function(){
  move(this);
},false)
document.body.addEventListener("mouseup",function(){
  flag = false;
},false);
div2.addEventListener("touchend",function(){
  flag = false;
},false)
