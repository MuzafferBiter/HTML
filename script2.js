function hesapla() {
    let boy = prompt("Boyunuzu Giriniz")
    let kilo = prompt("Kilonuzu Giriniz")
    let cinsiyet = prompt("Cinsiyetinizi Giriniz (erkek/kadın)");
    let sonuc = (kilo / (boy * boy)) * 10000

 let endexresult=document.getElementById("endexresult")
 let endextext=document.getElementById("endeximg");
 let endeximg=document.getElementById("endeximg");


 if (cinsiyet == "erkek") {
    
if (sonuc < 18){
    endextext.innerHTML="Zayıf";
    endeximg.src = "zayif.png";
    endextext.style.color="purple";
} else if (sonuc < 25){
endextext.innerHTML="Normal";
endeximg.src = "normal.png";
endextext.style.color="green";
}
else if (sonuc < 30){
endextext.innerHTML="Fazla Kilolu";
endeximg.src = "kilolu.png";
endextext.style.color="orange";
} else if (sonuc < 35){
endextext.innerHTML="Obez";
endeximg.src = "obez.png";
endextext.style.color="red";
}
else if (sonuc > 35){
    endextext.innerHTML="Aşırı Obez";
    endeximg.src = "obez.png";
    endextext.style.color="red";
    }
  } else if (cinsiyet == "kadın") {
    if (sonuc < 16){
        endextext.innerHTML="Zayıf";
        endeximg.src = "zayif.png";
        endextext.style.color="purple";
} else if (sonuc < 22){
    endextext.innerHTML="Normal";
    endeximg.src = "normal.png";
    endextext.style.color="green";
}
    else if (sonuc < 27){
    endextext.innerHTML="Fazla Kilolu";
    endeximg.src = "kilolu.png";
    endextext.style.color="orange";
} else if (sonuc < 30){
    endextext.innerHTML="Obez";
    endeximg.src = "obez.png";
    endextext.style.color="red";
}
else if (sonuc > 32){
    endextext.innerHTML="Aşırı Obez";
    endeximg.src = "obez.png";
    endextext.style.color="red";
}

else if (cinsiyet == "kadın")
    if(yas<50) {
        var text = "Hala Gençsiniz";
    }
    else{
        var text = "Yaşlısınız";
    }






}

endexresult.innerHTML = "Sonuc:" +sonuc.toFixed(2);
    endeximg.style.width="250px";


  }


