function job(delay, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });
};

let results = [];

Promise.all([job(1000, 10), job(3000, 20), job(500, 30), job(1500, 40)]).then((data) => {
    results = data;
});

export {job, results};
