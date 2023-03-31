console.log("GOT HERE!")

const myButton = document.querySelector("#myButton") as HTMLButtonElement;

function handleClick(event: MouseEvent) {
  // Code to execute when button is clicked
  console.log('Button clicked!');
}

myButton.addEventListener('click', handleClick);


