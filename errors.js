/*
 * try bloğu içerisindeki ifadeler çalıştırılır
 * Eğer bir hata oluşursa bu catch içerisinde değerlendirilir
 * finally bloğu içerisinde ise ne olursa olsun ifadeler çalıştırılır
 * throw özel hatalar yaratmak için kullanılır
 * 
 * cacth bloğunda hata değişkeni tanımlayarak, oluşan hataya dair bilgiler edinebiliriz
 * 
 * hata objesinin özellikleri:
 * 
 * name: hatanın ismi
 * message: hataya dair mesaj
 * 
 * hata türleri:
 * 
 * EvalError: eval() fonksiyonunda oluşan hata
 * RangeError: aralık dışı hatası 
 * ReferenceError: illegal referans hatası 
 * SyntaxError: sözdizimi hatası 
 * TypeError: tür hatası 
 * ERIError: encodeURI() fonksiyonunda oluşan hata
 * 
 */
var number = 1;
try {
  number.toPrecision(500);   //Sayının 500 basamağı olamaz
}
catch(err) {
  console.log(err.name); //RangeError
}

try {
    number = number + x;   //x beyan edilmediği için referans alınamaz
}
catch(err) {
    console.log(err.name);//ReferenceError
}

try {
    eval("alert('Hello)");  //' bekleniyor
}
  catch(err) {
    console.log(err.name); //SyntaxError
}

try {
    number.toUpperCase();  //number string değiş
}
  catch(err) {
    console.log(err.name); //TypeError
}

try {
    decodeURI("%%%");  //Yüzdelik işaretini URI kod olarak çözemezsin
}
  catch(err) {
    console.log(err.name); //URIError
}