function logMessage(message)
 {
      let output = document.getElementById("output");
      output.innerHTML += message
 }
    function brushTeeth() {
      return new Promise((resolve, reject) => {
        setTimeout(() => 
          {
           
          resolve("Teeth brushed");
          console.log("Teeth brushed");
          // reject("Error: Brushing failed");
        }, 1000);
      });
    }

    function haveBreakfast() {
      return new Promise((resolve, reject) => {
        setTimeout(() => 
            {
          resolve("Had breakfast");
          console.log("Breakfast done");
        }, 1500);

      });
    }

    function goToWork() 
    {
      return new Promise((resolve, reject) => {
        setTimeout(() =>
            {
          resolve("Reached office");
          console.log("At work");
        }, 1000);
      });
    }
    