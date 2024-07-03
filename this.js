/*
 * this anahtar kelimesi obje referansıdır
 * this bir variable değildir, anahtar kelimedir
 * this'in referans ettiği obje kullanıldığı yere göre değişiklik gösterir:
 * 
 * Obje methodları içerisinde kullanılırsa objeye referanslık eder
 * Tek başına kullanılırsa global objeye referans eder
 * Bir fonksiyonda global objeye referans eder
 * Strict modda bir fonksiyon içerisinde undefined'dır
 * 
 */

//.call(this, ...parameters) herhangi bir fonksiyonu belirli bir obje referansı kullanarak çalıştırabilir
//parametre alabilir (tek, tek)
var obj = { first: "value1" };

function foo1(param)
{
    console.log(this.first); //value1
    console.log(param); //value2
}

foo1.call(obj, "value2");

//.apply(this, [...parameters]) .call() gibi çalışır
//tek farkı parametreleri array olarak alabilir

foo1.call(obj, ["value2"]);

//.bind() bir fonksiyona obje referansı (this) bağlamak için kullanılır
const bindedFunc = foo1.bind(obj);

bindedFunc();
//value1
//value2