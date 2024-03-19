let stars1 = document.getElementById('stars1');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let ELMALAHA = document.querySelector('.ELMALAHA');

onscroll = function(){
    let value = scrollY;
    stars1.style.right = value + 'px';
    moon2.style.top = value *5 + 'px';
    mountains3.style.top = value *1.5 + 'px';
    mountains4.style.top = value *1.1 + 'px';
    river5.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value*3  + 'px';
    river5.style.left = value  + 'px';
    ELMALAHA.style.fontSize = value  + 'px';
    if(this.scrollY > 67){
        ELMALAHA.style.fontSize = 67  + 'px';
        ELMALAHA.style.position = 'fixed';
        if(this.scrollY > 300 ){
            ELMALAHA.style.display = 'none';
        }
        else{
            ELMALAHA.style.display = 'block';
        }
    }
    if(scrollY > 55){
        document.querySelector('.imges').style.background = 'linear-gradient(#375281,#376281)'
    }else{
        document.querySelector('.imges').style.background = 'linear-gradient(#200016 , #10001F)'
    }


}