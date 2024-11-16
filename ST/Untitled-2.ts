//  promies...

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise fulfilled");
  } else {
    reject("Promise rejected");
  }
});

promise
  .then((message) => console.log(message)) // Output: Promise fulfilled
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise settled"));

4


// Promises
let fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched with promise");
  }, 1000);
});

fetchDataPromise.then((data) => console.log(data)); // Output: Data fetched with promise

