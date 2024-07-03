/*
 * === ve !== operatörü hem veriyi hemde veri türünün eşitliğini kontrol eder
 * 
 * ===:
 * iki değikenin verisi ve veri türü eşitse true, değilse false
 * 
 * !==:
 * iki değişkenin verisi veya veri türü eşit değilse true, değilse false
 * 
 * ? (ternary) operatör, kısa koşullu ifadeler yazmak için kullanılır
 *  
 * typeof:
 * verilen verinin, veri türünü string olarak döndürür
 * null için object döndürür
 * array, object, set, map, date... için object döndürür
 * function için object değil function döndürür
 * 
 * instanceof:
 * bir verinin bir veri türüne ait olup olmadığını kontrol eder
 * ilkel veri türleriyle çalışmaz
 * 
 * >>>:
 * operatörü sağa kaydırma yaparken her boşlukları her zaman 0la doldurur, unsigned right shift
 * 
 * >>:
 * operatörü sağa kaydırma işleminde boşlukları işaret bitiyle doldurur, işaret korunur
 * 
 * &&=:
 * Eğer birinci değer true ise 2. değer atanır
 * 
 * ||=:
 * Eğer birinci değer false ise 2. değer atanır
 * 
 * ??=:
 * Eğer birinci değer undefined yada null ise 2. değer atanır
 * 
 * ??:
 * Eğer birinci eleman nullish değilse (null yada undefined) birinci elemanı döndürür
 * Nullish ise ikinciyi döndürür
 * 
 * ?.:
 * Eğer erişilmek istenen özellik nullish ise undefined döndürür
 * Değilse elemanı döndürür
 * 
 */

var variable1 = 1;
var variable2 = "1";

(variable1 == variable2) //true
(variable1 === variable2) //false

var variable3 = (true) ? "1" : "0"; //1

typeof variable1 //number
typeof variable1 //string

new String("1") instanceof String //true

5 >>> 1 // 0101 >>> 1 = 0010 => 2
5 >> 1 // 0101 >> 1 = 0010 => 2

var x = true;
var y = false;
var z = undefined;

x &&= "1"; //x = "1"
y ||= "1" //y = "1"
z ??= "1" //z = "1"

var first = null;
var second = "metin";
var third = first ?? second; //metin 

var obj = { deneme: "metin" };
obj?.deneme; //metin
obj?.metin; //undefined 