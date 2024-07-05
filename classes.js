/*
 * Sınıflar (classes) objeler için birer şablondur (template)
 * 
 * constructor methodu:
 * Sınıf ile yeni bir obje oluşturulduğunda bu method çalıştırılır, parametre alabilir
 * 
 * Sınıflar strict moddaymış gibi yazılmalı, yoksa hata ile karşılaşılır
 * 
 */
class exampleClass 
{
    constructor(first, second)
    {
        this.first = first;
        this.second = second;
    }
}

var obj = new exampleClass('1', '2');

obj.first; //1
obj.second; //2

/*
 * Miras (inheritance):
 * 
 * miras bir sınıfın başka bir sınıfın objelerini miras almasıdır
 * extends anahtar kelimesi ile gerçekleştirilir
 * 
 * class'lara hoisting yapılmaz, yani sadece tanımlandıktan sonra kullanılabilir
 *
 * super() mirasın alındığı sınıfın yapıcı (constructor) fonksiyonunu çağırmak için kullanılır
 * objelerdeki gibi getter ve setter ayarlanabilir
 * 
 */

class cls1
{
    constructor(variable1)
    {
        this.variable1 = variable1;
    }
}

class cls2 extends cls1
{
    constructor(variable1, variable2, variable3)
    {   
        super(variable1);
        this.variable2 = variable2;
        this.variable3_ = variable3;
    }
    get variable3()
    {
        return this.variable3_;
    }
    set variable3(value)
    {
        this.variable3_ = value;
    }
}

var obj = new cls2("1", "2", "3"); // { variable1: "1", variable: "2", variable3_: "3" }
obj.variable3 = "4"; // { variable1: "1", variable: "2", variable3_: "4" }
obj.variable3; //4



/*
 * static anahtar kelimesi:
 * 
 * static anahtar kelimesi ile tanımlanan özellikler class'a yazılır, objeler erişemez sadece class
 * static anahtar kelimesi kullanılmazsa class'ın protype'ına yazılır
 * böylelikle class'tan türeyen objeler prototype edinince onlarda bu özelliği kullanabilir
 * 
 */
class cls3
{
    static hello()
    {
        console.log("hello");
    }
}
var obj3 = new cls3();
//obj3.hello Hata
cls3.hello(); //hello

class cls4
{
    hello()
    {
        console.log("hello");
    }
}
var obj4 = new cls4();
obj4.hello(); //hello
//cls2.hello() Hata