/*
 * BigInt diğer veri türleriyle işlem yapamaz, dönüşüm gerektirir
 *
 */
var bigNumber = 10n;
var newBigNumber = new BigInt(10);

//bigNumber / 2 error
Number(bigNumber) / 2 //5

