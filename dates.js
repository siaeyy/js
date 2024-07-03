/*
 * Date objesi zamanı işlemek için kullanılan bir objedir
 * 
 * Date formatları:
 * 
 *                 ISO: 2015-03-25      
 * Kısa (Short) format: 03/25/2015
 *  Long (Uzun) format: Mar 25 2015
 * 
 * Date() anlık zamanı tutar
 * Date(Milisaniye) 1970'dan bu yana geçen milisaniye türünden verilen zamanı tutar
 * Eğer verilen milisaniye negatifse 1970'den verilen milisaniye kadar öncesinin zamanını tutar
 * 
 * Date(ISO, long, short) şeklinde de zaman belirtilebilir
 * Date(string) şeklinde sadece yıl olarak zaman tutulabilir
 * 
 * Aşağıdakiler verilen zamanları tutar, parametreler sayı olarak verilir
 * Eğer bir parametre kebdi sınırını aşarsa (13. ay) sonra parametre arttırılır:
 * Date(Yıl, Ay)
 * Date(Yıl, Ay, Gün)
 * Date(Yıl, Ay, Gün, Saat)
 * Date(Yıl, Ay, Gün, Saat, Dakika)
 * Date(Yıl, Ay, Gün, Saat, Dakika, Saniye)
 * Date(Yıl, Ay, Gün, Saat, Dakika, Saniye, Milisaniye)
 * 
 * Eğer Yıl 2 basamaklı verilirse 19xx şeklinde yorumlanır
 * Date(99, 6) = Date(1999, 6)
 * 
 */
const date = new Date(0);



//.toString() ECMAscript spesifikasyonuna göre formatlanmış şekilde tarihi stiringe dönüştürür
date.toString(); //Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)

//.toDateString() .toString()'den daha okunabilir bir formatta tarihi stringe dönüştürür
date.toDateString(); //Thu Jan 01 1970

//.toUTCString() UTC standartına göre zamanı string'e dönüştürür
date.toUTCString(); //Thu, 01 Jan 1970 00:00:00 GMT

//.toISOStiring() ISO standartına göre zamanı string'e dönüştürür
date.toISOString(); //1970-01-01T00:00:00.000Z

//Date.parse(string) geçerli formatta bir zamanı milisaniyeye çevirir
Date.parse("March 21, 2012"); //1332280800000


/*
 * .get methodları lokal zamana göre geri dönüş yapar (.getTime() dışında)
 *
 * .getFullYear() date objesinden yıl verisini döndürür
 * .getMonth() date objesinden ay verisini döndürür (0-11)
 * .getDate() date objesinden gün bilgisini döndürür, aylık olarak (1-31)
 * .getDay() date objesinden gün bilgisini döndürür, haftalık olarak (0-6)
 * .getHours() date objesinden saat bilgisini döndürür
 * .getMinutes() date objesinden dakika bilgisini döndürür
 * .getSeconds() date objesinden saniye bilgisini döndürür
 * .getMiliseconds() date objesinden milisaniye bilgisini döndürür
 * .getTime() date objesinin tuttuğu zamanın 1970'dan itibarenki geçen milisaniye miktarını döndürür
 * 
 * UTC'ye göre veri almak için .getUTC...() olarak kullanılabilir
 * UTC formatına göre edilinen veri Greenwich bazlıdır
 * 
 * .get...() yerine .set...() kullanılırsa data objesinin zaman bilgileri değiştirilebilir
 * 
 */
date.getFullYear(); //1970
date.getMonth(); //0
date.getDate(); //1
date.getDay(); //4
date.getHours(); //0
date.getMinutes(); //0
date.getSeconds(); //0
date.getMilliseconds(); //0
date.getTime(); //0

date.setTime(1); // (01/01/1970-00:00:01)



//Date.now() 1970'dan beri geçmiş süreyi milisaniye cinsinden döndürür
Date.now(); //1719838596585 (1.07.2024-15:56)

//Date.getTimezoneOffset() Lokal zamanla UTC zamanından dakika cinsinden farkı
date.getTimezoneOffset(); //-180 (Türkiye)