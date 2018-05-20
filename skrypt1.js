console.log('Hello') //to jest komentarz
console.warn('Warning')
console.error('zero') // tu jest blad
/* 
to
jest 
komentarz
wieloliniowy
*/
var a; // jest zmienna ktora jest widoczna w calym pliku
var b=5;
a=1
console.log(a+b)
a='jeden'
console.log(a) 

const e=0;// wart zmiennej nie moze byc zminiona
const d = 'qwe';

function sum() {
    let c=0; // widoczne tylko mdzy klamerkami
    console.log(c) 
}
console.log(sum()) 
