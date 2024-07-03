/*
 * Sınıflar (classes) objeler için birer şablondur (template)
 * 
 * constructor methodu:
 * Sınıf ile yeni bir obje oluşturulduğunda bu method çalıştırılır, parametre alabilir
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