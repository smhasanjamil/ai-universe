const loadData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data.data.tools))
}

loadData();

const displayData = (value) =>{
    console.log(value);
}