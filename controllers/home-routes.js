const router = require('express').Router();
const { Pets, User } = require('../models');


router.get("/search/:search", async (req, res) => {

  const query = req.params.search.toLowerCase()

  try {

    if (query) {

      const allpets = await Pets.findAll()
      const result=allpets.filter(obj=> obj.pet_name.toLowerCase() == query 
      || obj.breed.toLowerCase() == query
       || obj.gender.toLowerCase() == query
       || obj.species.toLowerCase() == query 
       || obj.pet_age.toLowerCase() == query
       
       );
      const searchedpets = result.map((pet) =>
        pet.get({ plain: true })
      );

      res.render('search', {
        searchedpets,
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (error) {
    return res.status(400).json({ message: `unable to get pets ${error}` })
  }

})


router.get('/', async (req, res) => {
  try {
    const dbPetData = await Pets.findAll();
    // include: [
    //     {
    //         model: Pets,
    //         attributes: ['id', 'pet_name','pet_age','species', 'breed', 'gender', 'arrival_date', 'current_date'],
    //     },
    // ],



    const pets = dbPetData.map((pet) =>
      pet.get({ plain: true })
    );


    res.render('homepage', {
      pets,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// GET one pet
router.get('/pet/:id', async (req, res) => {
  try {
    const dbPetData = await Pets.findByPk(req.params.id);
    // include: [
    //   {
    //     model: Pets,
    //     attributes: [
    //       'id',
    //       'pet_name',
    //       'pet_age',
    //       'species',
    //       'breed',
    //       'gender',
    //       'arrival_date',
    //       'current_date',
    //       'photo_url'
    //     ],
    //   },
    // ],


    if (dbPetData === null) {
      res.status(404).json({ error: 'Pet not found' });
      return;
    }

    const petData = dbPetData.get({ plain: true });
    res.render('pet-details', {
      ...petData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// signup route 

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the signup handlebars
  res.render('signup');
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
