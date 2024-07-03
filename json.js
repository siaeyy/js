/*
 * json açılımı json object notion yani javascript nesne gösterimi
 * 
 * veri depolamak ve transfer etmke için kullanılır
 * 
 * js object içeriğinin string olarak gösterimidir
 * 
 * json formatı:
 * adlar ve değerler parantez içerisinde  
 * veriler virgülle ayrılır
 * süslü parantez nesneleri
 * köşeli parantezler array'leri tutar  
 * 
 */
const  json =
`
{
    "first": 
    [
        { "pos": "first" }, 
        { "pos": "second" }
    ]
}
`;

//JSON.parse(stringJSON) verilen json verisini js objesine dönüştürür
var obj = JSON.parse(json);

//JSON.stringify(obj) verilen objeyi json verisine dönüştürür
var json2 = JSON.stringify(obj);