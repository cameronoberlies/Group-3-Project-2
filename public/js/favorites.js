const addToFav = async (event) => {
  
    const response = await fetch(`/api/favorites/${event.target.value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        console.log('Okay')
        ;
      } else {
        console.log('Failed to add favorite.');
      }
    }
//     const favoriteBtn = document.getElementById('favorite-btn');
// favoriteBtn.addEventListener('click', addToFav(favoriteBtn.value));

