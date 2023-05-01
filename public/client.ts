console.log("GOT HERE!")

const myButton = document.querySelector("#myButton") as HTMLButtonElement;

if (myButton === null) {
    console.log("NULLLLLL");
}

function handleClick(event: MouseEvent) {
  // Code to execute when button is clicked
  incrementCounter();
  getUpdatedCounter()
  .then(returnedCounter => {
    displayUpdatedCounter(returnedCounter);
  });
}

function incrementCounter(): void {
    fetch('/increment-counter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
} 

function getUpdatedCounter(): Promise<string> {
    return fetch('/get-counter')
    .then(response => response.json())
    .then(data => data.counter);
}

function displayUpdatedCounter(counter: string): void {
    const counterLabel = document.getElementById("counterLabel") as HTMLLabelElement;

    counterLabel.textContent = counter;
}

myButton.addEventListener('click', handleClick);


