/*
 * String
 * Number
 * Boolean
 * Undefined
 * Null
 * 
 * Bigint:
 * 64bit'e depolanamayacak kadar büyük sayıları tutmak için kullanılır
 * 
 * Symbol:
 * Benzersiz değerler elde etmek için kullanılır
 * 
 * Object:
 * Built-in objeler:
 * object, array, date, maps, set, promise 
 *
 */

//Sayı türleri sonlarına n eki getirilerek BigInt'e dönüştürülebilir
var big1 = BigInt("1234567890");
var big2 = 1234n;

var enique1 = Symbol("1");
var unique2 = Symbol("1");

(unique1 == unique2) //false

//javascript'te sayılar sabit 64 bittir
//sayılarda üstel gösterim e ile yapılabilir
var number = 1235e5;

var object1 = {example: "1", example2: "2", example3: "3"};
