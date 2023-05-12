const router = require('express').Router();
const { Pets, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbPetData = await Pets.findAll({
            include: [
                {
                    model: Pets,
                    attributes: ['id', 'pet_name','pet_age','pet_breed','arival_date'],
                },
            ],
        });

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
      const dbPetData = await Pet.findByPk(req.params.id, {
        include: [
          {
            model: Pet,
            attributes: [
              'id',
              'pet_name',
              'pet_age',
              'pet_breed',
              'arrival_date'
            ],
          },
        ],
      });
  
      const petData = dbPetData.get({ plain: true });
      res.render('pet-details', {
        petData,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });