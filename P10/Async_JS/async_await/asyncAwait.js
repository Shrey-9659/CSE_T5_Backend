let api = "https://jsonplaceholder.typicodee.com/users";
// fetch(api)
// .then((rawData) => {
//     return rawData.json()
// })
// .then((response) => {
//     console.log(response)
// })
// .catch((error) => {
//     console.log(error)
// })
async function fetchData() {
  try {
    let rawData = await fetch(api);
    let response = await rawData.json();
    console.log(response);
  } catch (error) {
    console.log("error");
  }

  // .catch((error) => {
  //   console.log(error);
  // });
}
fetchData();
