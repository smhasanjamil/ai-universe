//Fetch All Data from api
const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayData(data.data.tools))
}

loadData();

//Display Data from Api
const displayData = (datas) => {
    datas.forEach((value) => {
        console.log(value);
        const { id, name, description, image, published_in, features } = value;

        const container = document.getElementById('all-data');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ``;

    })
}