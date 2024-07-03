/*
 * Js sayılar 15 basamağa kadar tutarlıdır
 * Sayılar maksimum 17 basamaklı olabilirler
 * 
 */

/*
 * NaN (not a number) sayı olmayan değerlerdir
 *
 * NaN değerin türü number'dır
 * 
 */
100 / "metin" //NaN
typeof NaN //number

/*
 * Infinity ve -Infinity mümkün olan en büyük sayı değeri dışındaki değerlerdir
 *
 * Sıfıra bölme işlemi Infinity değer döndürür
 * 
 * Infinity değerin türü number'dır
 * 
 */
 1 / 0 //Infinity
-1 / 0 //-Infinity 
typeof Infinity //number

//POSITIVE_INFINITY
Number.POSITIVE_INFINITY //Infinity

//NEGATIVE_INFINITY
Number.NEGATIVE_INFINITY //-Infinity

//Sayılar hexdecimal olarak ifade edilebilir
var number = 0xFF; //255

/*
 * sayıları stringe dönüştürmek için .toString(base) kullanılabilir
 *
 * Base 2: Binary
 * 
 * Base 8: Octal
 * 
 * Base 10: Decimal
 * 
 * Base 16: Hexdecimal
 * 
 */
number.toString(2); //11111111

/*
 * MAX_VALUE ve MIN_VALUE:
 * Number objesine aittir
 * Sayı türündeki bir değişkenin özelliği değildir
 * 
 */
Number.MAX_VALUE //1.7976931348623157e+308
Number.MIN_VALUE //5e-324

number.MAX_VALUE //undefined
number.MIN_VALUE //undefined



//MAX_SAFE_INTEGER 
var max = Number.MAX_SAFE_INTEGER;

//MIN_SAFE_INTEGER
var min = Number.MIN_SAFE_INTEGER;

//Number.isInteger(value) verilen veri sayıysa true döndürür, değilse false
Number.isInteger(number); //true

//Number.isSafeInteger(value) verilen veri sayı değer sınırını aşmayan bir sayıysa true döndürür, değilse false
Number.isSafeInteger(number); //true

//.toExponential(value) sayıyı yuvarlar ve üstsel olarak gösterilmiş halini string olarak döndürür
number.toExponential(1); //2.6e+2

//.toFixed(value) sayının ondalık kısmını istenilen basamak sayısı kadar ayarlar
//Eğer istenilen basamak sayısı 0'sa sayıyı yuvarlar ve tam sayı haline getirir
number.toFixed(2); //255.00

//.toPrecision(value) sayının istenilen basamak sayısına indirger
//Eğer sahip olduğu basamak sayısından az ise artan basamağı yuvarlayar
//Gerekirse sayıyı üstsel olarak gösterir yada ondalık kısım ekler
number.toPrecision(4); //255.0

//.valueOf() değişkenin değerini döndürür
//Number objesinin değerini ilkel number türünde elde etmek için kullanılabilir
var numberObj = new Number(10);
numberObj.valueOf(); //ilkel türde 10



/*
 * Diğer türdeki verileri sayı türüne dönüştürmek için 3 method var
 * 
 * Number(value):
 * Verilen değeri sayı türünde bir veriye dönüştürüp, döndürür
 * Eğer dönüştüremezse NaN döndürür
 * Date objelerinide dönüştürelebilir; epoch-time'dan verilen tarihe kadar olan zamanı milisaniye olarak döndürür
 * 
 * parseInt(value) / Number.parseInt():
 * Verilen değeri tam sayı veri türüne dönüştürüp, döndürür
 * Eğer dönüştüremezse NaN döndürür
 * 
 * parseFloat(value) / Number.parseFloat():
 * Verilen değeri ondalık sayı türüne dönüştürüp, döndürür
 * Eğer dönüştüremezse NaN döndürür
 * 
 */
Number(new Date("1970-01-01")); //0
Number(new Date("1970-01-01")); //86400000

parseInt("10") //10
parseFloat("10") //10.0
