let a = 28;
a += 2;
console.log(a);
let name = "Alice";

function greet(name) {
  console.log("hello", name);
}


document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('nameInput');
  const btn = document.getElementById('okBtn');
  const result = document.getElementById('greeting');

  function showGreeting() {
    const val = (input.value || '').trim();
    if (!val) {
      result.innerText = 'Hallo';
      return;
    }
    result.innerText = 'Hallo ' + val.toUpperCase();
  }

  btn.addEventListener('click', showGreeting);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') showGreeting(); });
});


function boxmargin() {
  const elems = document.getElementsByClassName('box1');
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.marginTop = '50px';
  }
}

function boxmarginReset() {
  const elems = document.getElementsByClassName('box1');
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.marginTop = '0px';
  }
}