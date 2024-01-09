//LUAS PERSEGI PANJANG
function getArea(panjang,lebar){
    let luas = panjang * lebar;
    return luas;
}
let panjang = 10;
let lebar = 5;
let luas = getArea(panjang,lebar);

console.log("Luas persegi panjang: " + luas);


//KELILING PERSEGI PANJANG
function getPerimeter(p,l){
    let keliling = 2 * (p + l);
    return keliling;
}
let p = 10;
let l = 5;
let keliling = getPerimeter(p,l);

console.log("Keliling persegi panjang: " + keliling);
