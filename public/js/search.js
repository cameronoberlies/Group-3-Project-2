const searchFormHandler = async (event) => {
    event.preventDefault();
    const search = document.querySelector('#search').value.trim();
    if (search) {
        window.location.replace(`/search/${search}`);
    }
    else{
        window.location.replace("/");
    }
};

document.querySelector('.search-form').addEventListener('submit', searchFormHandler);