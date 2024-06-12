/*index26.html
let random = Math.random(); //random numara üretir 0'dan 1'e kadar.
let min = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //en küçük sayıyı bulur.
let max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //en büyük sayıyı bulur.
let round = Math.round(3.5); //sayıyı yuvarlar.
*/
/*function hesapmakinesi() {
    let hesapmakinesi=document.getElementById("hesapmakinesi");
    hesapmakinesi.style.display="none";
    let hesapmakinesiDurum = false;
}
function hesapla() {
    let inputhesap=document.getElementById("inputhesap");
    let sonuc=eval(inputhesap.value);
    inputhesap.value=sonuc;
}

function uyeekle() {
    let uyeler = array(
        {
            ad: "Ali",
            kullanici: "Veli"
            email: "ahmet@gmail.com"
            cinsiyet: "kadın"
        }
        {
            ad: "Ayşe",
            kullanici: "Fatma"
            email: "ahmet@gmail.com"
            cinsiyet: "Erkek"
        }
        {
            ad: "Mehmet",
            kullanici: "Kaya"
            email: "ahmet@gmail.com"
            cinsiyet: "Erkek"
        }
    );
    let alldata3 = document.getElementsByClassName("alldata3");
    for (let i = 0; i < uyeler.length; i++) {
        alldata3[0].innerHTML += 
        '<tr>
        <td>${uyeler[i].ad}</td>
        <td>${uyeler[i].kullanici}</td>
        <td>${uyeler[i].email}</td>
        <td>${uyeler[i].cinsiyet}</td>
        </tr>'
    };
    }
    alldata3[0].style.display = "block";
}
*/





document.addEventListener("DOMContentLoaded", function () {
    var sayi = 2;
    document.querySelector(".btn-basla").addEventListener("click", function(){
    var yazi = "Merhaba sınıf nasılsınız";
    setTimeout(function(){
        document.querySelector("yaz1").innerHTML = yazi;
    }, 3000);

    });
    document.querySelector(".btn-basla2").addEventListener("click", function(){
        setInterval(function(){
            sayi++;
            document.querySelector(".yaz2").innerHTML = sayi;
        }, 1000);
        });

    });