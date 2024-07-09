//.length: Array'in uzunluğunu elde etmek için
const arr = [1, 2, 3, 4, 5];
arr.length; //5

/*
 * Bir değişkeninin array olup olmadığını 2 yolla anlayabiliriz:
 * 
 * Array.isArray(arr)
 * arr instanceof Array
 * 
 */
Arrays.isArray(arr); //true
(arr instanceof Array); //true

//.toString() array'i metne döker
arr.toString(); //1,2,3,4,5

//.at(pos) verilen posizyondaki değeri döndürür
arr.at(0), //1

/*
 * [] ile .at() arasındaki fark:
 *
 * [] eksili değer alamazken .at() alabilir
 *
 */
arr.at(-1); //5

//.join(sep) seçtiğiniz ayırıcı ile arrayi metine döker
arr.join('-'); //1-2-3-4-5



/*
 * .pop() ve .push(value):
 *
 * .pop():
 * Arrayin son elemanını arrayden çıkarır ve döndürür
 * 
 * .push(value):
 * Array'in sonuna verilen değeri eleman olarak ekler ve array'in uzunluğunu döndürür
 * 
 */
arr.push('0'); //6
arr.pop(); //0



/*
 * .shift() ve .unshift(value):
 *
 * .shift():
 * Arrayin ilk elemanını kaldırır ve arrayi elemanlarını bir düşük indexe taşır
 * Kaldırılan elemanı döndürür
 * 
 * .unshift(value):
 * Arrayi elemanlarını bir üst indexe taşır ve arrayin başına verilen değeri eleman olarak ekler
 * Arrayin uzunluğunu döndürür
 * 
 */
arr.unshift('0'); //6
arr.shift(); //0



//delete arrayin elemanının değerini siler ve eleman değeri undefined olur
delete arr[arr.length-1]; //arr[arr.length-1] = undefined

//.concat array'leri bileştirmek için kullanılabilir
//Orijinal arrayi değiştirmez yeni bir array döndürür
//Çoklu parametre kabul edebilir
arr.concat(arr); //1,2,3,4,5,1,2,3,4,5

/*
 * .copyWithin(wherepos, startcopypos) array öğelerini array'deki başka bir konuma kopyalar 
 * Birinci posizyon kopyalanacak değerin başlangıç posizyonu
 * İkinci posizyon değerilerin yapıştırılmaya başlanılacağı posizyon
 * Aralık şeklinde verilebilir .copyWithin(wherepos, startcopypos, finishcopypos)
 * 
 * .copyWithin arraya yeni element eklemez
 * arrayin uzunluğunu değiştirmez
 * mevcut elementlerin üzerine yazar
 *
 */
arr.copyWithin(4, 0); //1,2,3,4,1
arr.copyWithin(4, 0, 4); //1,2,3,4,1



//.flat() iç içe olan arraylerin elemanlarını tek bir arrayde toplar ve o arrayi döndürür
const arr2 = [[[1, 2], 3],[4, 5],[6, 7], 8];
arr2.flat(); //1,2,3,4,5,6,7,8



/*
 * .splice(pos, deletedCount, values...):
 *
 * Verilen posizyon işlemlerin nereden başlayacağını belirtir
 * Verilen posizyondan sonra verilen silinecek element sayısı kadar element silinir
 * Silinecek elementlerden sonra aynı posizyondan sonrasına verilen değerler element olarak eklenir (Opsiyonel)
 * 
 * Orijinal array değişir
 * 
 */
const arr3 = ["a","b","c","d","e","f"];
arr3.splice(0, 2, "-", "-"); //-,-,c,d,e,f

//.toSpliced(pos, deletedCount, values...) .splice ile aynıdır
//Tek farkı bu method yeni bir array oluşturur, .splice() orijinal arrayi değiştirir
const arr4 = ["a","b","c","d","e","f"];
arr4.toSpliced(0, 2, "-", "-"); //-,-,c,d,e,f (yeni array)



/*
 * .slice(startpos, finishpos):
 * 
 * Verilen aralığı yeni bir array olarak döndürür
 * Eğer aralık olarak değilde sadece başlangıç posizyonu verilirse array'in o posizyonundan itibaren geri kalanını döndürür
 * 
 */
const arr5 = ["a","b","c","d","e","f"];

arr4.slice(1); //b,c,d,e,f
arr4.slice(1,4); //b,c,d



/*
 * Array için arama methodları:
 *
 * //string'le benzer
 * .indexOf()
 * .lastIndexOf()
 * .includes()
 *
 * .find()
 * .findIndex()
 * .findLast()
 * .findLastIndex()
 * 
 */

//.indexOf(value) verilen değeri arrayde bulursa bulunan ilk posizyonunu, bulamazsa -1 döndürür
arr.indexOf(2); //1
arr.indexOf(99); //-1

//.lastIndexOf(value) verilen değeri arrayde bulursa bulunan son posizyonunu, bulamazsa -1 döndürür
arr.lastIndexOf(3); //2
arr.lastIndexOf(99); //-1

/*
 * .indexOf() ve .lastIndexOf() opsiyonel olarak arama için başlangıç posizyonu alabilirler
 *
 */
 
//.includes(value) verilen değerin arrayde olup olmadığını kontrol eder, varsa true, yoksa false döndürür
//NaN değerleride kontrol edebilir
arr.includes(1); //true
arr.includes(99); //false

/*
 * .find(func) verilen fonksiyonda true döndüren ilk elemanın değerini döndürür
 * .findIndex(func) verilen fonksiyonda true döndüren ilk elemanın indexini döndürür
 * 
 * verilen fonksiyon 3 parametre alır:
 * 
 * value, index, itself
 * 
 */
arr.find(findFunc); //5
arr.findIndex(findFunc); //4

function findFunc(value, index, itself)
{
    return value > 4;
}

/*
 * .findLast(arrowfunc) arrayin sonundan başlayarak içerisine girilen arrow fonksiyonu elemanlarla test eder 
 * ve ilk true değeri döndüren elemanın değerini döndürür
 * .findLastIndex(arrowfunc) arrayin sonundan başlayarak içerisine girilen arrow fonksiyonu elemanlarla test eder 
 * ve ilk true değeri döndüren elemanın indexini döndürür
 * 
 */
arr.findLast(x => x < 3); //2
arr.findLastIndex(x => x < 3); //1



/*
 * Array sıralama methodları:
 * 
 * .sort()
 * .reverse()
 * .toSorted()
 * .toReversed()
 * 
 * .sort() ve .reverse() arrayleri değiştirir
 * .toSorted() ve .toReversed() yeni array oluşturup onu döndürür
 * 
 */
const arr10 = ['a', 'c', 'd', 'b', 'e'];

arr10.sort(); //a,b,c,d,e
arr10.toSorted(); //a,b,c,d,e (yeni array)

arr10.reverse(); //e,b,d,c,a
arr10.toReversed(); //e,b,d,c,a (yeni array)

//.sort() ve .toSorted() fonksiyonu string olan sayılarda sorun çıkarıyor
//bu sorunu karşılaştırma fonksiyonu ile çözebiliriz

arr10.sort(function(a, b){ return a - b });

/*
 * Eğer dönen değer negatifse a, b'den önce sıralanır
 * Eğer pozitifse b, a'dan önce sıralanır
 * Eğer sıfırsa birbirlerine göre sıraları değişmez
 * 
 */



//Obje arraylerini obje özelliğine göre sıralama fonksiyonu ile sıralayabiliriz
const objArr = [
    {id: 0},
    {id: 1}
]

objArr.sort(function(a, b){return a.id - b.id})
/*
 * [
 *      { id: 0 },
 *      { id: 1 }
 * ]
 * 
 */



/*
 * Array iterasyonü için kullanılan methodlar:
 * 
 * .forEach()
 * .map()
 * .flatMap()
 * .filter()
 * .reduce()
 * .reduceRight()
 * 
 * .every()
 * .some()
 * .from()
 * .keys()
 * .entries()
 * .with()
 * 
 */

/*
 * .forEach(func) arrayin her elemanı için verilen fonksiyonu çağırır
 * Çağırılan fonksiyon 3 parametre alır:
 * 
 * value, index, array
 * 
 */
const arr20 = [1,2,3,4,5];
arr20.forEach(forEachFunc); //2,3,4,5,6

function forEachFunc(value, index, array)
{
    array[index] = value + 1;
}

/*
 * .map(func) arrayin her elemanı için verilen fonksiyonu çağırır
 * Çağırılan fonksiyon 3 parametre alır:
 *
 * value, index, array
 * 
 * .map() orijinal arrayi değiştirmez, bir kopyası üzerinde çalışır ve onu döndürür
 *
 */
const arr30 = ['a','b','c','d','e'];
arr30.map(mapFunc); //a!,b!,c!,d!,e!

function mapFunc(value, index, array)
{
    return value + '!';
}

//.flatMap(arrowfunc) verilen arrow fonksiyonu her elemanda işler,
//sonrasında arrayi .flat() fonksonu gidi tekdüze hale getirir
const arr40 = [1,2,3,4,5];
arr40.flatMap(x => [x, x*2]); //1,2,3,4,5,6,7,8,9,10 (yeni array)

/*
 * .filter(func) arrayin her elemanı için verilen fonksiyonu çağırır,
 * eğer fonksiyon true döndürürse değeri döndüreceği array'e ekler,
 * false döndürürse eklemez
 * 
 * Çağırılan fonksiyon 3 parametre alır:
 * 
 * value, index, array
 * 
 */
const arr50 = [1,2,3,4,5];
arr50.filter(filterFunc); //2,4

function filterFunc(value)
{
    return !(value % 2);
}



/*
 * .reduce() ve reduceRight():
 * 
 * .reduce(func):
 * Dizeyi, her elemanı verilen fonksiyonda işleyip bir değere indirgemek için kullanılır
 * 
 * .reduceRight(func)):
 * .reduce()'la aynıdır sadece iterasyona array'in sağından başlar
 * 
 * Verilen fonksiyon 4 parametre alır:
 * 
 * total, value, index, array
 * 
 * .reduce() ve .reduceRight() orijinal dizede değişiklik yapmaz, indirgenen değeri döndürür
 * 
 */
const arr60 = [10,20,30,40,50];
arr60.reduce(reduceFunc); //150
arr60.reduceRight(reduceFunc); //150

function reduceFunc(total, value)
{
    return total += value;
}



/*
 * .every(everyfunc) array'daki bütün elementler verilen fonksiyondan geçirilir.
 * Bütün fonksiyon çağrıları true olarak dönerse .every() true olarak döner, yoksa false döndürür
 * Verilen fonksiyon 3 parametre alır:
 * 
 * value, index, array
 * 
 */
const arr70 = [1,2,3,4,5];
arr70.every(everyfunc); //true

function everyfunc(value, index, array)
{
    return (value > 0);
}

/*
 * .some(somefunc) array'daki bütün elementler verilen fonksiyondan geçirilir.
 * Bazı fonksiyon çağrıları true olarak dönerse .some() true olarak döner, yoksa false döndürür
 * Verilen fonksiyon 3 parametre alır:
 * 
 * value, index, array
 * 
 */
const arr80 = [1,2,3,4,5];
arr70.some(somefunc); //true

function somefunc(value, index, array)
{
    return (value > 0);
}

//Array.from() .length özelliğine sahip yada yinelenebilir (iterable) objelerden array oluşturmak için kullanılır
Array.from("Merhaba"); //M,e,r,h,a,b,a

//Array.keys() verilerin anahtarları için bir iteratör döndürür, anahtarlar array için indexlerdir
const arr90 = ['a','b','c','d','f','e'];
arr90.keys(arr90); //indexler için iteratör

//Array.entries() array'in key-value çiftleri için bir iteratör döndürür. Buradaki key'ler indexlerdir
const arr100 = ['1', '2', '3', '4', '5'];
arr100.entries(); //key-value çiftleri için iteratör

//Array.with() orijinal array'i değiştirmeden, istenilen elementi değiştirilmiş bir array döndürür
const arr110 = [1, 2, 3, 4];
arr110.with(3, 0); //1,2,3,0

//... iterable (yinelenebilir) nesnelerin elementlerini yayar, döker
const arr120 = ['a', 'b', 'c'];
const arr130 = [...arr20]; //['a','b','c'] olur [['a','b','c']] değil



//.fill(value) array'in elemanları verilen değerle değiştirir
const arr140 = ['a', 'b', 'c'];
arr140.fill("sa"); //sa, sa, sa

//Array.of(el1, el2... eln) verilen değerlerle yeni bir array oluşturup döndürür
const arr150 = Array.of("el1", "el2", "el3");
arr150; //el1, el2, el3