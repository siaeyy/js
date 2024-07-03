/*
 * Değişken beyanını 4 şekilde yapabilirz:
 * 
 * var:
 * var ile beyan edilen değişkenler global kapsama sahiptir, yeniden beyan edilebilir
 * aynı kapsam içerisinde yeniden beyan edilebilir
 * var ile beyan edilmiş bir değere sahip değişken yeniden var ile beyan edildiğinde değerini korur
 * tanımlanmadan önce kullanılabilir (undefined)
 * var ile beyan edilen bir değişken bir blok içerisinde yeniden beyan edilirse blok dışındada değeri değişecektir
 * 
 * let:
 * var ile beyan edilen değişkenler blok kapsama sahiptir, yeniden beyan edilemez
 * kullanılmadan önce beyan edilmeli (temponel dead zone)
 * aynı kapsam içerisinde yeniden beyan edileme
 * let ile beyan edilen bir değişken bir blok içerisinde yeniden beyan edilirse değeri sadece o blok için geçerlidir
 * 
 * const:
 * var ile beyan edilen değişkenler yeniden beyan edilemez yeniden değer atanamaz, blok kapsama sahiptir
 * const beyanı sırasında değeri atanmış olmalı
 * 
 * otomatik:
 * eğer değişkeni bir anahtar kelime ile beyan etmeden direkt atama yaparsak,
 * değişken global objenin üyesi haline gelir ve global kapsama sahip olur / dosyalar arasında paylaşılabilir
 *
 * 
 * Değişken adlandırma kuralları:
 * Harf, rakam , altçizgi ve dolar işareti kullanılabilir
 * Rakam ile başlayamaz  
 * 
 */

/*
 * Hoisted: Beyan edilen değişkenin kod parçacığının başına taşınması
 * sadece var kelime anahtarında geçerlidir
 */

var variable1 = 1;
var variable1 = 1; //yeniden beyan
var variable1; //değerini korur

let variable2 = 1;
// let deneme2 = 2; hata

const constant1 = 1; //sabit

glob = 1; //global

/*
 * Virgül ile çoklu değişken beyanı yapılabilinir
 */

let variable10, variable20, variable30 = 1;

