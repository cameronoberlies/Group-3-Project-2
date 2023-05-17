const router = require('express').Router();
const { Pets, User } = require('../models');

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

router.get('/contactus', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the contactus handlebars
  res.render('contactus'); 
});

router.get('/favorites', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the favorites handlebars
  res.render('favorites'); 
});

router.get('/volunteer', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the volunteer handlebars
  res.render('volunteer'); 
});

router.get('/foster', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // renders the foster handlebars
  res.render('foster'); 
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

//cookies
var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(8080)
//cookies

module.exports = router;
