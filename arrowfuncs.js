/*
 * Ok fonksiyonlar (arrow functions) lambda ifadeleri gibi çalışır, fonksiyonları daha kısa olarak oluşturmaya yarar
 * Değer döndüren bir ifade içerir
 * 
 * Ok fonksiyonların içerisinde this anahtar kelimesi her zaman ok fonksiyonun tanımlandığı objeye referanslık eder
 * Normal fonksiyonlar ise çağrıldığı objeye referanslık eder
 * 
 */
var foo1 = () => 'Merhaba';
var foo2 = () => this;

console.log(foo1()); //Merhaba
console.log(foo2()); //[object Window]


