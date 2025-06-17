// Creating a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, World!";
            resolve(data); // or reject("Error!") to simulate an error
        }, 1000);
    });
}

// Handling with .then() and .catch()
fetchData()
    .then(result => {
        console.log("Promise resolved:", result);
    })
    .catch(error => {
        console.log("Promise rejected:", error);
    });

// Handling with async/await
async function getData() {
    try {
        const result = await fetchData();
        console.log("Async/Await resolved:", result);
    } catch (error) {
        console.log("Async/Await rejected:", error);
    }
}

getData();