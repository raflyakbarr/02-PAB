console.log("------ Variables ------");

// Penggunaan 'var'
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // Mencetak nilai terakhir 'i' di luar loop, yaitu 5

// Penggunaan 'var' dalam sebuah fungsi
function looping() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
looping();
console.log(i); // Mencetak nilai 'i' di luar fungsi, yaitu 5

// Penggunaan 'let' dalam loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // Akan menghasilkan ReferenceError karena 'i' hanya ada dalam blok loop

// Penggunaan 'let' untuk deklarasi ulang dalam blok yang berbeda
for (let i = 0; i < 5; i++) {
    console.log(i);
}
if (true) {
    let i = 100; // Variabel 'i' dalam blok 'if' memiliki lingkup yang berbeda
    console.log("i =", i);
}

// Penggunaan 'const' untuk konstanta
const phi = 3.14; // Nilai 'phi' tidak dapat diubah setelah deklarasi
// phi = 3.147; // Akan menghasilkan TypeError jika mencoba mengubah nilai 'phi'
console.log(phi); // Mencetak nilai konstanta 'phi', yaitu 3.14
