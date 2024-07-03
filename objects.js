//Obje oluşturma
const object1 = {};
const object2 = new Object();


//Obje özellikleri
object1.propertie1 = "1";
object2["propertie2"] = "1";

delete object1.propertie1;

//Nested
const obj = {
    obj1: {
        vl: "1"
    }
}

//Obje methodu
object1.foo = function()
{
    console.log("1");
}

/*
 * Built-in js constructors
 * new Object()
 * new Array()
 * new Map()
 * new Set()
 * new Date()
 * new RegExp()
 * new Function()
 * 
 */

/*
 * Primitive:
 * Objeler gibi özelliği yada methodu olmayan verilerddir
 * 
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 * bigint
 * 
 */

/*
 * Immutable:
 * Sabit kodlanmış ve değiştirilemez değerlerdir
 * Primitive'ler Immutable'dır
 * 
 * Mutable:
 * Immutable'lar aksine değiştirilebilirler
 * Değere değil, refereransa adreslendirilmişlerdir
 *  
 */



/*
 * General Object Methods:
 * 
 * Object.assign()
 * Object.create()
 * Object.entries()
 * Object.fromEntries()
 * Object.keys()
 * Object.values()
 * object.groupBy()
 * 
 */

//Object.assign(target, source) kaynak objedeki üyeleri hedef objeye kopyalar
var obj1 = { first: "first" };
var obj2 = {};

Object.assign(obj2, obj1);
abj2; // first: "first"

//Object.create(obj) verilen objenin contructor'ını kullanarak yeni bir obje oluşturur ve döndürür
//Eğer verilen obje literal şeklinde oluşturulduysa üyelere sahip olsa bile boş obje döner
var obj3 = { first: "first" };
var obj4 = Object.create(obj3);
obj4; //{}

//Object.keys(obj) verilen objenin key'lerini barındıran bir array olarak döndürür
var obj5 = { first: "first" };
var keys = Object.keys(obj5);
keys; //["first"]

//Object.values(obj) obje özelliklerinin değerlerini barındıran bir array döndürür
var values = Object.values(object1);

//Object.entries(obj) key, value çiftlerinden oluşan bir dize döndürür
var entries = Object.entries(object2);

//Object.fromEntries(arr) key, value çiftlerini barındıran bir array'den bir obje oluşturup döndürür
var entriesArr = [["first", "first"]];
var obj6 = Object.fromEntries(entriesArr);

//Object.groupBy(objArr, arrowFunc) bir obje array'indeki objelerin gruplara ayrılması için kullanılır
//her obje ok fonksiyondan geçirilir, döndürülen değer objenin grubudur
//grup array'lerini içeren bir obje döndürür

var objects = [
    { group: 'A' },
    { group: 'B'}
]

var groupedObjects = Object.groupBy(objects, obj => obj.group);
groupedObjects;
/*
 * {
 *      'A':
 *      [
 *          { group: 'A' }
 *      ],
 *      'B':
 *      [
 *          { group: 'B' }
 *      ]
 * }
 * 
 */



/*
 * Özellik yönetme methodları (Property Management Methods)
 * 
 * Object.defineProperty()
 * Object.defineProperties()
 * Object.getOwnPropertyDescriptor()
 * Object.getOwnPropertyDescriptors()
 * Object.getOwnPropertyNames()
 * Object.getPrototypeOf()
 * 
 */

//Object.defineProperty(obj, prop, descriptor) belirli bir objeye özellik eklemek için kullanılır
var obj100 = {};
Object.defineProperty(obj100, "first", {
    value: "first"
});
obj100; //first: "first"

//Object.defineProperties(obj, descriptors) belirli bir objeye aynı anda birden fazla özellik eklemek için kullanılır
//Descriptors obje olarak verilir
var obj200 = {};
Object.defineProperties(obj200, {
    first: {
        value: "first"
    },
    second: {
        value: "second"
    }
});
obj200; //first: "first", second: "second"

//Object.getOwnPropertyDescriptor(obj, prop) verilen objedeki belirli bir özelliğin descriptor'ünü elde etmek için kullanılır
var obj300 = {
    first: "first"
};
Object.getOwnPropertyDescriptor(obj300, "first");
// value: "first", writable: true, enumerable: true, configurable: true

//Object.getOwnPropertyDescriptors(obj) verilen objedeki bütün özelliklerin descriptor'lerini döndürür
var obj400 = {
    first: "first",
    second: "second"
};
Object.getOwnPropertyDescriptors(obj400);
/*
 * {
 *      first: 
 *      {
 *          value: "first", writable: true, enumerable: true, configurable: true
 *      },
 *      second:
 *      {
 *          value: "second", writable: true, enumerable: true, configurable: true
 *      }
 * }
 * 
 */

//Object.getOwnPropertyNames(obj) objenin özelliklerinin isimlerini array olarak döndürür
var obj500 = {
    first: "first",
    second: "second"
};
Object.getOwnPropertyNames(obj500);
// first, second

//Object.getPrototypeOf(obj) verilen objenini prototipini döndürür
var obj1000 = {};
Object.getPrototypeOf(obj1000);
// {...}