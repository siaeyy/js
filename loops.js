/*
 * for in ve of:
 *
 * for in: objelerin üyeleri boyunca döngü girer, her yineleme anahtar döndürür
 * for of: iterable (yinelenebilir) objeler üzerinde döngüye girer, her yineleme değer döndürür
 * 
 */

var arr = ['a', 'b', 'c'];

for (index in arr)
{
    console.log(index); //0,1,2
}

for (value of arr)
{
    console.log(value); //a,b,c
}

/*
 * Iterators (Yineleyiciler):
 * Yineleyici protokolü, bir objeden değerlerin sırayla nasıl alınacağını belirler
 * 
 * Bir obje .next() methodunu uyguladığında bir iteratör (yineleyici) olur
 * 
 * Bir iteratör 2 özellik döndürmelidir:
 * Value: Sonraki değer 
 * Done: İterasyonun sonlanıp sonlanmadığı (true/false)
 * 
 * Eğer bir obje Symbol.iterator üyesine sahip ise for of döngüsü tarafından iterasyon uygulanabilir,
 * böylelikle kendi iterable objelerimizi oluşturabiliriz
 * 
 */

const obj = {};

obj[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { return { done: true } };
            return { value: n, done: done };
        }
    }
}

for (const number of obj)
{
    console.log(number); //10,20,30,40,50,60,70,80,90
}
