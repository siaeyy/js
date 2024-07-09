
//var text = new String("metin")
var text = "metin girin";

//Metin uzunluğunu elde etmek için string veri türünün length özelliği kullanılabilir
text.lenght; //5

/*
 * Kaçış karakterleri:
 * Metnin yapısını bozmamak için \ ile kullanılırlar
 * 
 * \" , \' , \\
 * 
 */

/*
 * \b Backspace
 * \f Sayfa sonu (yazıcılar için)
 * \n Yeni satır
 * \t Tab
 * 
 */

/*
 * Stringlerle karakter bazında uğraşmak için 4 metot vardır:
 * .charAt(pos)
 * .charCodeAt(pos)
 * .at(pos)
 * [pos]
 * 
 */ 


//.charAt(pos) verilen pozisyondaki karakteri döndürür
text.charAt(0); //m

//.charCodeAt(pos) verilen pozisyondaki karakteri utf-16 kodunu döndürür
text.charCodeAt(0); //109

//.at(pos) verilen pozisyondaki karakteri döndürür
//charAt'den farkı negatif indexleri parametre olarak kabul etmesidir
text.at(0); //m

/*
 * String'lerde [] kullanımının sakıncaları:
 * String veri türündeki değişkenleri array gibi gösterebilirler ama öyle değiller
 * Eğer karakter bulunmuzsa undefined döndürürler, charAt() ise boş string
 * Sadece okuma yapabilirler, değer atamaya çalışıldığında işe yaramazlar ama hatada vermezler
 * 
 */

/*
 * Stringlerle parça bazında uğraşmak için 3 metot vardırr
 * .slice(start, end)
 * .substring(start, end)
 * .substr(start, length)
 * 
 */

/*
 * .slice(start, end) metin içerisinde bir bölümü döndürür
 * Sadece start girilirse metnin o kısımdan itibaren geri kalanını döndürür
 * Eğer eksili bir değer girilirse pozisyonu metnin sağından itibaren sayar
 * 
 */
text.slice(6, 11); //girin

/*
 * .substring(start, end) .slice fonksiyonuna benzemekte
 * Eğer negatif bir değer verilirse 0 olarak kabul eder
 * 2. parametre es geçilirse metnin verilen pozisyondan itibaren geri kalanını döndürür
 *
 */
text.substring(-1, 11); //girin

/*
 * .substr(start, length) .substring() fonksiyonuna benzer
 * 2. parametre olarak uzunluk alır
 * 2. parametre es geçilirse metnin verilen pozisyondan itibaren geri kalanını döndürür
 * Eğer parametre negatifse posizyonu metnin sağından itibaren sayar
 *
 */
text.substr(6, 5); //girin



//.toUpperCase() metnin karakterlerini büyük harf haline getirir
text.toUpperCase(); //METİN GİRİN

//.toLowerCase() metnin karakterlerini küçük harf haline getirir
text.toLowerCase(); //metin girin



//.concat() 2 yada daha fazla metni birleştirir
concat("lütfen ", text); //lütfen metin girin



//.trim() fonksiyonu metnin sağ ve sol taraflarındaki boşlukları siler
(" " + text + " ").trim(); //metin girin

//.trimStart() fonksiyonu sadece metnin sağındaki boşlukları siler
(" " + text).trimStart(); //metin girin

//.trimEnd() fonksiyonu sadece metnin solundaki boşlukları siler
(text + " ").trimEnd(); //metin girin



//.padStart(pad, length) verilen miktara ulaşana kadar metnin başına verilen karakteri ekler
text.padStart(4, "x"); //xxxmetin girin

//.padEnd(pad, length) verilen miktara ulaşana kadar metnin sonuna verilen karakteri ekler
text.padEnd(4, "x"); //metin girinxxx



//.repeat(count) metni verilen miktar kadar tekrar eder, ve yeni bir metin döndürür
text.repeat(2); //metin girinmetingirin



//.replace(value, value) verilen metni, orijilen metinde eğer bulursa bulduğu ilk noktayla verilen 2. metinle değiştirir
//.replace() fonksyionu bulunacak metin için regex ifadeleri kabul eder
text.replace("girin", "girmeyin"); //metin girmeyin

//.replaceAll(value, value) .replace() fonksiyonun bütün eşleşen değerleri değiştiren versiyonudur
//bulunacak metin için regex ifadesi olarak /g kullanılması zorunludur
text.replace(/girin/g, "girmeyin"); //metin girmeyin



//.split(sep) metni verilen karakter/metine göre ayırır ve array döndürür
//eğer verilen karakter/metin boşsa metni karakterlerine ayırır
text.split(" "); //["metin", "girin"]



/*
 * String arama methodları:
 * .indexOf()
 * .lastIndexOf()
 * .search()
 * .match()
 * .matchAll()
 * .includes()
 * .startsWith()
 * .endsWith()
 * 
 */

//.indexOf(value) verilen metini orijinal metinde bulursa bulduğu ilk pozisyonunu, bulamazsa -1 döndürür
text.indexOf("metin") //0

//.lastIndexOf(value) verilen metni orijinal metinde bulursa bulduğu son posizyonu, bulamazsa -1 döndürür
text.lastIndexOf("metin") //0

/*
 * .indexOf()'a veya .lastIndexOf()'a 2. parametre olarak pozisyon verilirse:
 * 
 * .indexOf():
 * metni baştan o posizyona kadar arar
 * 
 * .lastIndexOf():
 * metni sondan o posizyona kadar arar
 * 
 */

/*
 * .search(), .indexOf() ile benzer ama birkaç farkı var
 *
 * .search() başlama pozisyonu alamaz
 * .indexOf() regex ifadeleri alamaz
 * 
 */
text.search("metin") //0


//.match(regex/value) verilen regex ifadeleriyle veya metinle eşleşen değerleri döndürür
text.match(/metin/) //metin

//.matchAll(regex/value) verilen regex ifadeleriyle veya metinle eşleşen değerler içeren bir iteratör döndürür
//Eğer regex ifadesi girilecekse g bayrağı girilmelidir
text.matchAll(/metin/g) //metin

//.includes(value) verilen metni orijinal metinde bulursa true bulamazsa false döndürür
//ikinci parametre olarak başlangıç posizyonu alabilir
text.includes("metin") //true

//.startWith(value) orijinal metin, verilen metin ile başlıyor ise true döndürür, değilse false
text.startsWith("metin") //true

//.endWith(value) orijinal metin, verilen metin ile bitiyor ise true döndürür, değilse false
text.startsWith("girin") //true



/*
 * Template string: 
 * Metinlerin içerisine değişkenlerin ve ifadelerin değerlerini yerleştirmek için kullanılır
 * 
 * `...` şeklinde kullanılır
 * 
 * Değerler ${...} ile yerleştirilir
 * 
 */

var text2 = `Text değişkeninin değeri: ${text}` //Text değişkeninin değeri: metin girin



/*
 * String local işlemler:
 * Tarayıcının diline göre gerçekleştirilen işlemlerdir
 * 
 * .localCompare():
 * bir string'i başka bir string ile tarayıcı diline göre alfabetik olarak sıralarını karşılaştırır
 * dönüş değerleri:
 * 1: eğer verilen string method uygulanan string'den önce geliyorsa
 * 0: sıraları eşitse
 * -1: sonra geliyorsa
 * 
 * .toLocalLowerCase():
 * tarayıcı diline göre string'i küçük harfli hale getirir
 * 
 * .toLocalUpperCase():
 * tarayıcı diline göre string'i büyük harfli hale getirir
 *
 */
var text3 = "ab";
var text4 = "cd";
text3.localeCompare(text4); //-1

var text5 = "i";
var tex6 = "I";
text5.toLocaleUpperCase(); //i
text6.toLocaleLowerCase(); //ı