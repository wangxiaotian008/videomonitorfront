Date.prototype.format = function (format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};

	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}

	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
		  format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}

	return format;
}
function timeGo(){
	var th=this;
	this.time=+new Date();
	this.f=function(time){
		var t=(new Date(this.time).format("yyyy.MM.dd hh:mm:ss")).split(' ');
		$('.headBox .timeBox').html('<span>'+t[1]+'</span><span>'+t[0]+'</span>');
	} 
	this.f();
	this.set=setInterval(function(){
		th.time=th.time+1000;
		th.f();
	},1000)
}
new timeGo();