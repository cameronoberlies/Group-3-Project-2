const addToFav = async (petId) => {

    const response = await fetch(`/api/favorites/${petId}`, {
        method: 'POST',
        body: JSON.stringify({petId}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        console.log('Okay')
        ;
      } else {
        console.log('Failed to add favorite.');
      }
    }
    const favoriteBtn = document.getElementById('favorite-btn');
favoriteBtn.addEventListener('click', addToFav(favoriteBtn.value));

