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
 * .then() promise objesindeki işlem bittikten sonra yapılacak işlemler için
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