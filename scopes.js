/*
 * Javascript'te 3 kapsam vardır:
 *
 * Global
 * Fonksiyon (Function)
 * Blok (Block)
 * 
 */

/*
 * Blok kapsamı:
 * { } içerisi blok kapsamıdır
 * 
 * var ile tanımlanan değişkenler dışarıdan erişilebilir
 * let ile tanımlananlar ise erişilemez
 * 
 */
{
    let a1 = 1;
    var a2 = 1;
}
a1; //erişilemez
a2; //erişilebilir

/*
 * Fonksiyon kapsamı:
 * 
 * Her fonksiyonun fonksiyon kapsamı vardır ve bu fonksiyonların içerisinde tanımlanan değişkenler dışarıdan erişilemez
 * 
 */
function foo()
{   
    let a3 = 1;
    var a4 = 1;
    const a5 = 1;
}
a3; //erişilemez
a4; //erişilemez
a5; //erişilemez

/*
 * Global kapsam:
 * 
 * Bir blok veya fonksiyon dışarısında tanımlanan değişkenler global kapsama sahip olur ve her yerden erişilebilir
 * 
 */
var a6 = 1;

function foo2()
{
    a6; //erişilebilir
}

{
    a6; //erişilebilir
}

/*
 * Otomatik global
 * 
 * var, let veya const ile beyan edilmiş değişkenler direkt olarak global atanır
 * 
 */
globalVarible = 1;


/*
 * Closure:
 * Fonksiyon içerisinde (function scope) dışarıdaki değişkenlere erişmemizi sağlayan yapı
 * 
 * Temel olarak fonksiyonu çevreleyen kapsamların ve fonksiyon kapsamının birleşimi
 * (Yanlış olabilir ama işlevi bu)
 * 
 */