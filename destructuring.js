/*
 * Objeleri ve arrayleri yaymaya yayar
 * Orijinal obje veya array'de değişim olmaz
 * 
 */
const obj = {
    prop1: 'x',
    prop2: 'x'
};

const arr = ['y', 'y', 'y', 'y', 'y'];

var { prop1, prop2 } = obj;
var [ el1, el2 ] = arr;

//Bulunmayan bir değer için varsayılan değer atanabilir
var { prop1, prop2, prop3 = 'x' } = obj;

//Objelerin üyelerine takma isim atanabilir
var { prop1 : first, prop2 } = obj;

//Array'lerde elementler atlanabilir
var [ el1 , , , el2] = arr;

//Array'lerde posizyona göre seçebiliriz
var { [0]:el1, [1]:el2 } = arr;

//Array'de geriye kalanlar yeni bir array olarak tutulabilir
var [ el1, el2, ...el3 ] = arr;



//Bu özellik ile 2 değişken değiş tokuş edilebilir
var variable1 = 1;
var variable2 = 2;

[ variable1, variable2 ] = [ variable2, variable1 ];
/*
 * variable1 = 2;
 * variable2 = 1;
 * 
 */