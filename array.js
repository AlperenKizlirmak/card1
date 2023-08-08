/*<script>
 var rafe = new Array("sıfır", "bir", "iki", "üç");
 document.write(rafe);
</script> */

const { indexOf } = require("underscore");


var sayilar = ["0", "1", "2", "3"];
document.write(sayilar);


var uzunluk = ["araba", "ev", "villa", "nakliye", "yalı","gulet","128milyardolar"];
document.write(uzunluk.length);

var uzunsun = ["bmw", "mercedes", "lambo"];
document.write(uzunsun.length);

var sayilar =["1", "2", "3"];
document.write(sayilar[2]);

var sayilar = ["1", "2", "3", "4"];
sayilar.push("5");
document.write(sayilar);


var sayilar = ["sarımsak", "kastomonu"];
sayilar.push("sarımsakherderdedeva");
document.write(sayilar);

//unshift dizinin başına eleman eklemeye yarar

var dizi = ["gereksiz","ne", "var","lan"];
dizi.unshift("abidikgubidikherif");
document.write(dizi);

// splice diziden eleman silmeye yarar

var dizi = ["ali", "ahmet", "mehemet"];
dizi.splice("ahmet");
document.write(dizi);


//pop  methodu dizinin sonuna eleman ekler.


var dizi = ["beetle", "vw"];
dizi.pop("1965model");
document.write(dizi);


//shift methodu dizinin ilk elemanını siler

var dizi = ["Çankırılı", "Ankaralı", "Namık"];
dizi.shift();
document.write(dizi);

// concat() methodu diziyi birleştirir.

var dizi = ["sifir", "bir", "iki", "üç"];
var dizi1 = ["dört", "beş",];
var dizi_ve_dizi1 = dizi.concat(dizi1);
dizi.concat();
document.write(dizi_ve_dizi1);


var array = ["vw", "golf"];
var array2 = ["lamborgihini", "aventador"];
var array_ve_array2 = array.concat(array2);
document.write(array_ve_array2);

var arabalar = [""];
var kamyonlar = [""];
var arabalar_ve_kamyonlar = arabalar.concat(kamyonlar);
document.write(arabalar_ve_kamyonlar);


var naber = ["naber"];
var merhaba = ["merhaba"];
var naber_ve_merhaba  = naber.concat(merhaba);
document.write(naber_merhaba);




var selam = ["selam"];
var hi = ["hi"];
var  selam_ve_hi = selam.concat(hi);
document.write(selam_hi);




var helallan = ["helallan"];
var Yusufi = ["Yusufi"];
var helallan_ve_Yusufi = varhelallan.concat(Yusufi);
document.write(helallan_ve_Yusufi);


//sort dizideki elemanları sırlar.

var sayilar = ["1", "2"];
document.write(sayilar.sort());


var harfler = ["a", "b"];
document.write(harfler.sort());


var sehirler = ["ankara", "kırıkkale", "rize"];
document.write(sehirler.reverse());


var nabergelmedisendenbihaber = ["aman", "yavrum","dikkat", "et"];
document.write(nabergelmedisendenbihaber.reserve());




var isimler = ["Alperen", "Battal"];
document.write(isimler,indexOf("Battal"));



//typeof verideğişkenin türünü bulmaya yarar?//


var isimler = ["Alize", "Alperen"];
document.write(typeof(1));

//

toString//

var insanlar = ["a", "b", "c", "d"];
var insanlar = insanlar.toString();
document.write(typeof (insanlar.toString()));


//join methoduSıralama görünümünü değiştirmeye yarar.
var off = ["o", "f", "f"];
document.write(off.join("-"));


//if else örnekleri

var tuttugumsayi = 8;
var kullanicisayisi = prompt("Aklımadan 1den 10a kadar hangi sayıyı tutyorum bil bakalaım?" "");
if(tuttugumsayi == kullanicisayisi) {
 alert("Tebrikler doğru tahmin! =)");

} else {
 alert("Üzgünüm. Tuttuğum sayı 8di.");
} 






var tuttugumsayi = 9;
var kullanicisayisi = prompt("Aklımdan 1'den 10'a kadar hangi sayıyı tutuyorum,bil bakalım.", "");
if(tuttugumsayi == kullanicisayisi) {
 alert("Tebrikler doğru tahmin! =)");

}
else if (tuttugumsayi > kullanicisayisi) {
 alert("ÜZGÜNÜM!");
}
else if (tuttugumsayi < kullanicisayisi) {
 alert("ÜZÜGÜNÜM!")
}

var kullanicisayisi = prompt("Aklımdan 1 den 10a kadar sayı tutuyorum");
switch(kullanicisayisi){
 case "1":
  alert("DEĞİL!");
  break;
  case "2":
   alert("DEĞİL");
   break;
   case"3":
   alert("DEĞİL");
   break;
   case "4":
    alert("Tebrikler");
    break;
    case "5":
     alert("DEĞİL");
     break;
     case "6":
      alert("DEĞİL");
      break;
      case "7":
       alert("DEĞİL");
       break;
       case  "8":
        alert("DEĞİL")
}



















