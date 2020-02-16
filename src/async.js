const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have succeded!");
    }, 1000);
  } else {
    reject("I have failed!");
  }
});

myPromise
  .then(value => value + "++++")
  .then(newVal => console.log(newVal))
  .catch(rejectValue => console.error(rejectValue));
