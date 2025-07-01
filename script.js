const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      if (display.value === "0" || display.value === "Error") {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
});

// Evaluate expression on pressing Enter key inside input
display.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }
});
