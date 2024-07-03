/*
 * Set, bir verinin aynı anda sadece 1 tane kopyasının bulunabileceği özel bir iterable objedir
 * 
 * Aynı verinin eklenmeye çalışılması hiçbir şey yapmayacaktır
 * 
 * Yeni bir Set nesnesi oluştururken değerler array'de olmalı
 * 
 */
const set = new Set(['a', 'b', 'c']);

//.add(value) set'e veri ekler
set.add('d'); //ekler
set.add('d'); //eklemez

for (const el of set)
{
    console.log(el); //a,b,c,d
}

//.has(value) set'te bir verilen veri var mı yok mu diye kontrol eder
set.has('d'); //true

//.forEach(eachfunc) her değerin bir fonksiyona iletir
var text = "";

function eachfunc(value)
{
    text += value;
}

set.forEach(eachfunc);
//text = "abcd"

//.values() set'teki değerler için iteratör döndürür
for (const el of set.values())
{
    console.log(el); //abc
}

//.keys() set'te key olmadığı için değerleri döndürür, .values() ile aynı işleve sahip
for (const el of set.keys())
{
    console.log(el); //abc
}

//.entries() normalde key-value çiftlerini döndürür ama set'te key olmadığı için value-value çiftleri döndürür
set.entries(); //['a','a'],['b','b'],['c','c'],['d','d']

//.delete(value) set'teki değeri siler
//silinecek öğe setteyse true değilse false döndürür
set.delete('d');

//.clear() set'ti temizler
set.clear();