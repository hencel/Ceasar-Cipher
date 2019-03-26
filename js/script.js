const button = document.querySelectorAll('.button');
const buttonClear = document.querySelector('.buttonClear');
let userText = document.querySelector('.userText');
let programText = document.querySelector('.programText');
const k = document.querySelector('input[name="ceasarKey"]');
const k2 = document.querySelector('input[name="ceasarDekey"]');

button[0].addEventListener('click', cipher); 
button[1].addEventListener('click', decipher); 

function cipher(event) { //Notka autora: optymalne rozwiązanie (krótsze) tego szyfru jest dostępne w sieci. Jednak moim celem w tym wypadku było stworzenie rozwiązania własnego, nie skopiowanym z sieci.   
    event.preventDefault();
    
    let n;
    let crypted = [];
    key = parseInt(k.value);
    if (isNaN(key) || key < 1 || key > 26) {
        alert('Wpisz poprawny klucz kodowania! Wartość liczbowa w przedziale 1-26')
    }
    for (let i=0; i<userText.value.length; i++) {
        
        n = userText.value.charCodeAt(i);
        if ((n >= 65) && (n <= 90)) {
            n += key;
            if (n > 90) {
                n = (n - 90) + 64;
            } 
            crypted += (String.fromCharCode(n));
        } else if ((n >= 97) && (n <= 122)) {
            n += key;
            if (n > 122) {
                n = (n - 122) + 96;
            } 
            crypted += (String.fromCharCode(n));
        } else {
            crypted += (String.fromCharCode(n));
        }
    }    
    programText.textContent = crypted;
}


function decipher(event) { 
    event.preventDefault();

    let m;
    let uncrypted = [];
    key = parseInt(k2.value);
    if (isNaN(key) || key < 1 || key > 26) {
        alert('Wpisz poprawny klucz odkodowania! Wartość liczbowa w przedziale 1-26')
    }
    for (let i=0; i<userText.value.length; i++) {
        m = userText.value.charCodeAt(i);
        if ((m >= 65) && (m <= 90)) {
            m -= key;
            if (m < 65) {
                m = (65 - m) + 89;
            } 
            uncrypted += (String.fromCharCode(m)); 
        } else if ((m >= 97) && (m <= 122)) {
            m -= key;
            if (m < 97) {
                m = (97 - m) + 121;
            } 
            uncrypted += (String.fromCharCode(m));
        } else { 
            uncrypted += (String.fromCharCode(m));
        }
    }
    programText.textContent = uncrypted;
}

buttonClear.addEventListener('click', clear); 

function clear() {
    programText.textContent = '';
    userText.value = '';
}