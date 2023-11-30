//button to generate data
document.getElementById('btn-data')?.addEventListener('click', getUser)
let results = document.querySelector('#results');

function getUser() {
    // console.log('test')
    fetch('https://randomuser.me/api?results=20').then(result => result.json())
        .then(data => {
            //  console.log(data);
            let candy = data.results;
            for (let person of candy) { 
                // @ts-ignore
                results.innerHTML += `<h1>${person.name.first}</h1>
               
                
                
                `
            }
                
    })
}





