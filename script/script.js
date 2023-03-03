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
        div.innerHTML = `
        <div class="card h-100">
            <img src="${image}" class="card-img-top p-3" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">Features</h5>
                <p class="card-text">1. ${features[0]}</p>
                <p class="card-text">2. ${features[1]}</p>
                <p class="card-text">3. ${features[2]}</p>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-9">
                        <h5 class="card-title fw-bold">${name}</h5>
                        <small class="text-muted"> <span><i class="fa-solid fa-calendar-days"></i></span> ${published_in} </small>
                    </div>
                    <div class="col-3">
                        <button class="btn d-grid mx-auto align-middle"><span style="background-color: #FEF7F7; color:red; padding: 10px; border-radius: 75px;" class="mx-auto align-middle"><i class="fa-solid fa-arrow-right"></i></span></button>
                    </div>
                </div>
            </div>
        </div>
        `;

        container.appendChild(div);

    })
}