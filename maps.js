/*
 * Map, key ve value olarak her türü kabul eden bir yapıdır
 * Map objesini başlatırken key-value değerlerini array-array olarak iletmeliyiz
 * 
 * Object vs Map:
 * 
 * Object:
 * Direkt yinelenebilir (iterable) değildir
 * Size özelliği yoktur
 * Key'ler string olmak zorundadır
 * Key'ler düzgün sıralı değildir
 * 
 * Maps:
 * Direkt yinelenebilir (iterable)
 * Size özelliği vardır
 * Key'ler herhangi türde bir veri olabilir
 * Key'ler eklendikleri sıraya göre dizilidir
 * 
 */
const map = new Map([
    ['deneme1', 1],
    ['deneme2', 2]
]);

//.set(key, value) map'te bir key-value ikilisi belirlemek için
const obj = {};

map.set(obj, 'object'); // {} => 'object'

//.get(key) map'te bir key'in değerini almak için
map.get(obj); //'object'

//.has(key) map'te bir key var mı yok mu diye kontrol eder (true-false)
map.has(obj); //true

//.delete(key) map'te verilen key'i siler
map.delete(obj);

//.size map'in boyutunu döndürür
map.size; //1

//.clear() bütün map'i temizler
map.clear();



const map10 = new Map([
    ['deneme', 'deneme']
]);

/*
 * .forEach(eachfunc) methodu map içerisindeki her değeri bir fonksiyondan geçirir
 * Verilen fonksiyon 2 parametre alır:
 * 
 * value, key
 * 
 */

map10.forEach(eachfunc);

function eachfunc(value, key)
{   
    console.log([key, value]); //['deneme', 'deneme']
}

//.entries() key-value çiftleri için bir iteratör döndürür
for (const el of map10.entries())
{
    console.log(el); //['deneme', 'deneme']
}

//.keys() map'teki key'ler için bir iteratör döndürür
for (const key of map10.keys())
{
    console.log(key); //deneme
}

//.values() map'teki değerler için bir iteratör döndürür
for (const value of map10.values())
{
    console.log(value); //deneme
}

//Map.groupBy(map, groupfunc) array'ler için olan .filter() methodu gibi çalışır
//Her key-value çifti fonksiyona iletilir ve true döndüren çiftleri ile yeni bir map oluşturulup, döndürülür
Map.groupBy(map, groupfunc); // 'deneme' => 'deneme'

function groupfunc(couple)
{
    return couple[0] == 'deneme';
}

