//Fetch All Data from api
const loadData = () => {
    //Spinner
    document.getElementById('load-spinner').classList.remove("d-none");

    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => {
            document.getElementById('load-spinner').classList.add("d-none");
            displayData(data.data.tools.slice(0, 6))
        })
}

loadData();

//Display Data from Api
const displayData = (datas) => {
    const container = document.getElementById('all-data');
    container.innerHTML = '';
    datas.forEach((value) => {
        // console.log(value);
        const { id, name, description, image, published_in, features } = value;

        //Date convert from string
        const dateString = published_in;
        const date = new Date(dateString);
        const publishedDate = date.toLocaleDateString();



        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${image}" class="card-img-top p-3" alt="..." style="border-radius:25px !important">
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
                        <small class="text-muted"> <span><i class="fa-solid fa-calendar-days"></i></span> ${publishedDate} </small>
                    </div>
                    <div class="col-3">
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn d-grid mx-auto align-middle" onclick="loadSingleCardDetails('${id}')"><span style="background-color: #FEF7F7; color:red; padding: 10px; border-radius: 75px;" class="mx-auto align-middle"><i class="fa-solid fa-arrow-right"></i></span></button>
                    </div>
                </div>
            </div>
        </div>
        `;

        container.appendChild(div);

    })

}


//Show All Data Together
const showAllDataTogether = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayData(data.data.tools));
    document.getElementById('seeMore').classList.add("d-none");
    document.getElementById('all-data').classList.add("mb-5");
}



const loadSingleCardDetails = (id) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => displaySingleData(data.data))
}

const displaySingleData = (values) => {
    console.log(values);
    // values.sclice(1,6);
    const { id, tool_name, description, logo, image_link, input_output_examples, pricing, features, integrations, accuracy } = values;

    const modalContainer = document.getElementById('modal-body');

    modalContainer.innerHTML = `
        <div class="row">
            <div class="col-md-6 mb-3 mb-md-0">
                <div class="card border-danger bg-danger bg-opacity-10" style="background-color: rgba(235, 87, 87, 0.05) !important;">
                    <div class="card-body">
                        <h2 class="card-title fw-bold">${description ? description : 'No description found'}</h2>
                        <div class="row my-3">
                            <div class="col-12 col-md-4 text-center">
                                <p class="text-success">${(pricing[0].price ? pricing[0].price : 'Free Of Cost')}<br>${pricing[0].plan ? pricing[0].plan : 'Not Found'}</p>
                            </div>
                            <div class="col-12 col-md-4 text-center">
                                <p class="text-warning">${(pricing[1].price ? pricing[1].price : 'Free Of Cost')}<br>${pricing[1].plan ? pricing[1].plan : 'Not Found'}</p>
                            </div>
                            <div class="col-12 col-md-4 text-center">
                                <p class="text-danger">${(pricing[2].price ? pricing[2].price : 'Free Of Cost')}<br>${pricing[2].plan ? pricing[2].plan : 'Not Found'}</p>
                            </div>
                        </div>

                        <div class="row mb-3 mb-md-0">
                            <div class="col-12 col-md-6">
                                <h4 class="card-title fw-bold">Features</h4>
                                <ul class="text-secondary">
                                    <li>${features[1].feature_name ? features[1].feature_name : 'No data Found'}</li>
                                    <li>${features[2].feature_name ? features[2].feature_name : 'No data Found'}</li>
                                    <li>${features[3].feature_name ? features[3].feature_name : 'No data Found'}</li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-6">
                                <h4 class="card-title fw-bold">Integrations</h4>
                                <ul class="text-secondary">
                                    <li>${integrations[0] ? integrations[0] : 'No data Found'}</li>
                                    <li>${integrations[1] ? integrations[1] : 'No data Found'}</li>
                                    <li>${integrations[2] ? integrations[2] : 'No data Found'}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">

                

                <p class="text-light bg-danger position-absolute top-0 end-0 me-4 mt-4 p-1 fs-6 rounded">${accuracy.score ? accuracy.score + '% accuracy' : ''}</p>


                    <img src="${image_link[0] ? image_link[0] : 'No Image Found'}" class="card-img-top p-3 rounded" alt="..." style="border-radius:25px !important">
                    <div class="card-body">
                        <h4 class="card-title text-center fw-bold">${input_output_examples[0].input ? input_output_examples[0].input : 'Can you give any example?'}</h4>
                        <p class="card-text text-center">${input_output_examples[0].output ? input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

}


//Sort data by date
const sortData = () => {
    //Spinner
    document.getElementById('load-spinner').classList.remove("d-none");

    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => {
            document.getElementById('load-spinner').classList.add("d-none");
            document.getElementById('seeMore').classList.add("d-none");
            document.getElementById('all-data').classList.add("mb-5");
            const sortedData = data.data.tools.sort((a, b) => new Date(b.published_in) - new Date(a.published_in));
            displayData(sortedData)
        })
}
