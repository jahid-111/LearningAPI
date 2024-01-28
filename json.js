// console.log("json.js")

const dataLink = 'https://jsonplaceholder.typicode.com/users'

fetch(dataLink)
.then(res => res.json())
// .then(json => console.log(json))




function dataLoad(){

    fetch(dataLink)
    .then(res => res.json())
    .then(json => user(json))

}
// dataLoad()

const dataSection = document.getElementById('data-section');


// console.log(dataSection)

function user(datas){
    // console.log(datas)
    for(data of datas){
      
    const li = document.createElement('li')

    li.innerText = data.name;
    dataSection.appendChild(li)
        // console.log(li)
    }

    

} 
