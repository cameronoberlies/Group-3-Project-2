let gender = ""

function displayRadioValue() {
    var ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            gender = ele[i].value;
    }
}

const addPetsFormHandler = async (event) => {

    displayRadioValue()

    event.preventDefault();

    const pet_name = document.querySelector('#petName').value.trim();
    const pet_age = document.querySelector('#petAge').value.trim();
    const species = document.querySelector('#species').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const arrival_date = document.querySelector('#arrival_date').value.trim();
    const current_date = document.querySelector('#current_date').value.trim();
    const photo_url = document.querySelector('#photo_url').value.trim();

    console.log("data at js ", pet_name, pet_age, species, breed, gender, arrival_date, current_date, photo_url)

    if (pet_name && pet_age && species && breed && gender && arrival_date && current_date && photo_url) {
        const response = await fetch('/addPets', {
            method: 'POST',
            body: JSON.stringify(
                {
                    pet_name,
                    pet_age,
                    species,
                    breed,
                    gender,
                    arrival_date,
                    current_date,
                    photo_url
                }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('.addPets-form')
    .addEventListener('submit', addPetsFormHandler);