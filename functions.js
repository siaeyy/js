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
//sa

s;