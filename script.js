// right
function fun_r(){
    var top= document.getElementById('top');
    var box= document.getElementById('box');
    box.style.right=0;
    box.style.left='auto';
}
// left
function fun_l(){
    var top= document.getElementById('top');
    var box= document.getElementById('box');
    box.style.left=0;
    box.style.right='auto';
    box.style.transform='5s';
}
// top
function fun_t(){
    var top= document.getElementById('top');
    var box= document.getElementById('box');
    box.style.top=0;
    box.style.bottom='auto';
    box.style.transform='5s';
}
// buttom
function fun_b(){
    var top= document.getElementById('top');
    var box= document.getElementById('box');
    box.style.bottom=0;
    box.style.top='auto';
    box.style.transform='5s';
}