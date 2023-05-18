const addToFav = async (petId) => {

    const response = await fetch('/api/favorites', {
        method: 'POST',
        body: JSON.stringify({petId}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }


