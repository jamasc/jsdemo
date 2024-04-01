class ValueDisplay {
  // Constructor to initialize properties
  constructor(...args) {
    this.args = args;
  }

  displayProperties() {
    document.getElementById("display").innerHTML = `
      <p>Property 1: ${this.property1}</p>
      <p>Property 2: ${this.property2}</p>
    `;
  }
  
  // Method to execute when div is clicked
  doSomething() {
    console.log("Div clicked! Do something...");
  }
}

// Create an instance of the class
const myInstance = new MyClass("Value 1", "Value 2");

// Call the method to display properties when the page loads
window.onload = function() {
  myInstance.displayProperties();
  
  // Add click event listener to the div
  document.getElementById("display").addEventListener("click", function() {
    myInstance.doSomething();
  });
};
