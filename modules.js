/* 
 * export anahtar kelimesi ile dışa aktarma yapabilirsiniz
 * import ile modüllerde aktarılan değişken ve fonksiyonları içe alabiliriz
 * export default anahtar kelimesi dışa aktarılacak ana değişken, fonksiyon için kullanılır
 * 
 * Node.js CommonJs modül sistemini kullanır,
 * aşağıdaki methodların node.js ile çalışması için configirasyon yapılmalıdır
 *  
 */

export const PI = 3.14;
export function foo()
{
    return "foo";
}

export default base = 
{
    PI: PI,
    foo: foo
}

//////////////////////////////////////////

import * from "./...";
import m from "./...";
import m, { PI, foo } from "./...";

m;
/*
 * {
 *      PI: PI,
 *      foo: foo
 * }
 * 
 */