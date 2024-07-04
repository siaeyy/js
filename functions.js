/*
 * Fonksiyonlar değişken olarak tutulabilir ve diğer fonksiyonlara paremetre olarak iletilebilir
 *
 */

function foo1()
{
    console.log("sa");
}

var foo2 = foo1; //fonksiyonu değişkende tutma

function run(func)
{
    func();
}



/*
 * arguments nesnesi:
 * 
 * fonksiyonlar bu nesneyi içerir, çağırıldıklarında girilen parametreler bu nesne üzerinden erişilebilir
 * 
 */
function foo2()
{
    console.log(arguments); 
}

foo2(1, 2, 3, 4, 5); //Arguments { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5}