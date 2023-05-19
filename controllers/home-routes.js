const router = require('express').Router();
const { Pets, User, userFavorites } = require('../models');
const Auth = require('../utils/auth');


router.get('/home', Auth, async (req, res) => {
  try {
    const dbPetData = await Pets.findAll();
   
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

router.post("/addPets", async (req, res) => {

  console.log("data incoming ", req.body)
  try {
    const dbPetsData = await Pets.create({
      pet_name: req.body.pet_name,
      pet_age: req.body.pet_age,
      species: req.body.species,
      breed: req.body.breed,
      gender: req.body.gender,
      arrival_date: req.body.arrival_date,
      current_date: req.body.current_date,
      photo_url: req.body.photo_url
    });
    req.session.save(() => {
      res.status(200).json(dbPetsData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

})

router.get("/search/:search", async (req, res) => {

  const query = req.params.search.toLowerCase()

  try {

    if (query) {

      const allpets = await Pets.findAll()
      const result = allpets.filter(
        obj => obj.pet_name.toLowerCase().includes(query)
          || obj.breed.toLowerCase().includes(query)
          || obj.gender.toLowerCase().includes(query)
          || obj.species.toLowerCase().includes(query)
          || obj.pet_age.toLowerCase().includes(query)
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
    // lets log to the console what petData actually looks like
    console.log('------- petData is', petData);
    res.render('pet-details', {
      ...petData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// si

router.get('/signup', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  // renders the signup handlebars
  res.render('signup',);
});

router.get('/contactus', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the contactus handlebars
  res.render('contactus', {loggedIn: req.session.loggedIn});
});

// TODO create a favorites POST, add to database using a is_favorites field, alt: add a fav field to user database/table. add all of pet_id in a comma seperated value - applies to voluterr.js as well 

router.get('/favorites', async (req, res) => {
  // TODO create a GET all pets is_favorites to true send to page
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the favorites handlebars
  try {
    const favoriteData = await Pets.findAll({through:{where:{user_id: req.session.user_id}}})
    const favorites = favoriteData.map((favorite) => favorite.get({plain: true}))
    console.log('Success!')
    res.render('favorites', {favorites})
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

});

router.post('/favorites', async (req,res) => {

});

router.get('/volunteer', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the volunteer handlebars
  res.render('volunteer', {loggedIn: req.session.loggedIn});
});

router.get('/foster', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the foster handlebars
  res.render('foster', {loggedIn: req.session.loggedIn});
});

// Login route
router.get('/', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

router.get('/addPets', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the volunteer handlebars
  res.render('addPets', {loggedIn: req.session.loggedIn});
});

//cookies
var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
//app.use(cookieParser())

//app.get('/', function (req, res) {
  // Cookies that have not been signed
  //console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  //console.log('Signed Cookies: ', req.signedCookies)
//})

app.listen(8080)
//cookies

module.exports = router;
