// (Type Inference)
let apples = 'sad';
// hata verir, çünkü initialize ettiğimiz tipi alır
// apples = 5;

//problem yok aynı tip
apples = 'asdas';

// (Type Inference)
// Any tipini alır, çünkü initialize etmedik en başta
let asd;
asd = 5;

// Sonuç
// Type'ları inference yöntemiyle alırsak boşu boşuna anotation koymamış oluruz
// böylece kod kalabalığı azalır
// let apples: string = 'sad'; yerine let apples = 'sad'; yazmak daha az kod ve okunur
// any type ise ama kendi type anotation ile kendimiz tipini verirsek daha sağlıklı

// When to use annotations
// 1) Functions taht returns any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ['asda', 'fslkgfk', 'sdlkfgmsdklf'];
let foundWord: boolean;

words.forEach(element => {
  if (element === 'green') foundWord = true;
});

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -20, -30];
let numberAboveZero: boolean | number = false;

numbers.forEach(element => {
  if (element > 0) numberAboveZero = element;
});
