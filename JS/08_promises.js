const orderFood = (isRestOpen, hasItems) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isRestOpen) {
        reject("Rest Closed");
      } else if (!hasItems) {
        reject("Out of order");
      } else {
        resolve("Item ordered");
      }
    }, 5000);
  });
};

// orderFood(true, true)
//   .then((message) => console.log("msg", message))
//   .catch((err) => console.log("err", err))
//   .finally(() => console.log("sucess"));

//promise.race
const fast = new Promise((resolve) =>
  setTimeout(() => {
    resolve("fast");
  }, 1000),
);

const slow = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Slow");
  }, 2000),
);

// Promise.race([slow, fast]).then((value) => console.log(value));

//Promise.allSettled
const p1 = Promise.resolve("success");
// const p2 = Promise.reject("error");

// Promise.allSettled([p1, p2]).then((value) => console.log(value));

//promise.all
const p3 = Promise.resolve("A");
const p4 = Promise.resolve("B");
const p5 = Promise.resolve("C");
const p6 = Promise.resolve("D");

// Promise.all([p3, p4, p5, p6])
//   .then((val) => console.log(val))
//   .catch((err) => console.log("err", err));

// Promise.any
const p7 = Promise.reject("Fail 1");
const p8 = Promise.reject("Success");
const p9 = Promise.reject("Fail 2");

Promise.any([p7, p8, p9])
  .then((val) => console.log(val))
  .catch((err) => console.log("err", err));
