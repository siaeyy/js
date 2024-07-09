/*
 * Diğer işlemlerle birlikte paralel şekilde fonksiyon çalıştırmak için 2 method var:
 * 
 * setTimeout() ve setInterval():
 * 
 * setTimeout(func, milisecs):
 * verilen fonksiyonu verilen milisaniye sonra çalıştırır
 * 
 * setInterval(func, milisecs):
 * verilen fonksiyonu verilen milisaniye aralıklarla çalıştırır
 * 
 */
function timeout()
{
    console.log("timeout");
}

function interval()
{
    console.log("interval");
}

setTimeout(timeout, 10000);
//timeout

setInterval(interval, 10000);
/* interval
 * interval
 * interval
 * interval
 * ...
 */



/*
 * promise objesi:
 * fonksiyonlardan dönüş değeri garantisi oluşturabilmek için bir objedir
 * asenkron işlemlerin dönüş değerlerini yönetmek içindir
 * 
 * 3 durumu vardır:
 * 
 * pending: işleniyor
 * fulfilled: sonuç döndü
 * rejected: error döndü
 * 
 * promise objesine dahil 2 method vardır: resolve(), reject()
 * 
 * resolve(): 
 * işlemden değer döndürmek için kullanılır, bu methodla durum fulfilled olur, işlem başarılıyla sonuçlanmıştır
 * 
 * reject():
 * işlemden hata döndürür, durum rejected olur, işlem hatayla sonuçlanmıştır
 * 
 * Bu methodlar promise objesine asenkron işlenmesi için verilen fonksiyona parametre olarak girilir.
 * 
 * .then() promise objesindeki işlem bittikten sonra yapılacak işlemler için,
 * fulfilled veya rejected durumlar için ayrı fonksiyonlar sağlanır
 * .catch() promise objesinden hata dönerse yapılacak işlemler için
 * 
 */
var stat = false;

const myPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if(stat == false)
        {
            reject("false");
        }
        else
        {
            resolve("true");
        }
    }, 3000);
});

myPromise.then(() => {
    console.log("timeout");
}).catch((error) => {
    console.log(error);
});



/*
 * async ve await anahtar kelime anahtarları:
 * 
 * async: 
 * fonksiyon beyan edilirken async anahtar kelimesi kullanılırsa fonksiyon içerisinde await anahtar kelimesi kullanılabilir
 * 
 * await:
 * promise objesini bekler ve beklerken fonksiyon işleyişini bekletir
 * 
 */

async function foo()
{
    const myPromise = new Promise(function(resolve){
        setInterval(() => {
            resolve("foo");
        }, 3000);
    });
    console.log(await myPromise);
};

foo();

//.all(promiseArr) verilen promise objeleri resolve edildiğinde yeni bir promise objesi döndürür
//dönen değerleri array içerisinde yeni promise objesinde resolve eder
const myPromise1 = new Promise(function(resolve){
    setTimeout(resolve, 200, "1");
});

const myPromise2 = new Promise(function(resolve){
    setTimeout(resolve, 300, "2");
});

Promise.all([myPromise1, myPromise2]).then((x) => {
    x.forEach(e => {
        console.log(e);
    });
});
/*
 * 1
 * 2
 * 
 */

//.allSettled(promiseArr) verilen promise objeleri tamamlandığında durumları ve dönüşlerini içeren bir obje arrayi döndürür
//eğer promie resolve edilirse value, reject edilirse reason özelliği içerir
const myPromise3 = new Promise(function(resolve, reject){
    resolve("3");
});

const myPromise4 = new Promise(function(resolve, reject){
    reject("4");
});

Promise.allSettled([myPromise3, myPromise4]).then((x) => {
    x.forEach((el) => {
        console.log(x);
    })
});
/*
 * { status: "fulfilled", value: "3"}
 * { status: "rejected", reason: "4"}
 * 
 */

//.any(promiseArr) verilen promise objelerinden fulfilled durumuna ulaşan ilk promise promise resolve olarak döndürülür
const myPromise5 = new Promise(function(resolve, reject){
    setTimeout(resolve, 200, "5");
});

const myPromise6 = new Promise(function(resolve, reject){
    setTimeout(resolve, 300, "6");
});

Promise.any([myPromise5, myPromise6]).then((x) => {
    console.log(x);
});
//5

//.finally(func) .then() methodundan farklı olarak fuldilled ve rejected durumlar için farklı geri aramalar sağlamak yerine
//her iki durum içinde tek geri arama kullanır
