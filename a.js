var d_h2 = document.getElementsByTagName('h2');
var d_2hLength=d_h2.length;
alert(d_2hLength);
var d_h2h=[];
for (var i=0; i < d_2hLength; i++) {
	d_h2h[i] = d_h2[i].offsetTop;
}