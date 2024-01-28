// console.log("json.js")

const dataLink = 'https://jsonplaceholder.typicode.com/todos/1'

fetch(dataLink)
.then(res => res.json())
// .then(json => console.log(json))




function dataLoad(){

    fetch(dataLink)
    .then(res => res.json())
    .then(json => console.log(json))

}
