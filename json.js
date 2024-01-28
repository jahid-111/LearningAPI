// console.log("json.js")

const dataLink = 'https://jsonplaceholder.typicode.com/users'

fetch(dataLink)
.then(res => res.json())
.then(json => console.log(json))




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



 const url = "https://jsonplaceholder.typicode.com/posts";
        function getData(){
            fetch(url)
            .then(response => response.json() )
            .then(reject => userData(reject))
        }
        const dataBox = document.querySelector(".dataBox")
        // console.log(dataBox)

    function userData(datas){
        for(const data of datas ){
            const div = document.createElement('div')
            div.classList.add("post")
                    div.innerHTML =` 
                        <h4>User ID ${data.id} </h4>
                        <h5>User Title : ${data.title} </div>                   
                        <p>User Post : ${data.body}</p>
                        `
            dataBox.appendChild(div);
            // console.log(data)
        }
    }
 console.log(" API load From :" , url)










