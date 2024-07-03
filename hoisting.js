/*
 * Javascript'te tanımlanan değişkenlerin beyanlarına hoisting (yukarı taşıma) yapılır
 *
 * var beyanları hoisting edilir, tanımlanması edilmez
 * let ve const'ta edilir ama beyanına gelene kadar dead-zone'dadır (not initialized)
 * 
 */

var a = 1;
//var a; yukarı taşınır, a = 1; taşınmaz

//fonksiyon tanımlamalarıdaa hoisted edilir
