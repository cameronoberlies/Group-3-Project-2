const router = require('express').Router();
const { User } = require('../../models');
const Auth = require('../../utils/auth');

// GET /api/users
router.get('/', (req, res) => {
    // Access our user model and run .findAll() method
    User.findAll(
        {
            attributes: [
                'id',
                'person_name',
                'species_wanted'
              ]
            }
    )
        .then(users => res.json(users))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(users => {
            if (!users) {
                res.status(404).json({ message: 'There is No user with this id' });
                return;
            }
            res.json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post /api/users
router.post('/register', (req, res) => {
    user.create({
        species_wanted: req.body.species_wanted,
        person_name: req.body.person_name
    })
        .then(users => {
            req.session.save(() => {
                req.session.user_id = users.id;
                req.session.person_name = users.person_name;
                req.session.species_wanted=users.species_wanted;
                req.session.loggedIn = true;
                res.json(users);
            });
        });
});

// LOGIN
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            person_name: req.body.person_name,

        }
    }).then(users => {
        if (!users) {
            res.status(400).json({ message: 'There is No user with this email address!' });
            return;
        }

        req.session.save(() => {
            // declare session variables
            req.session.user_id = users.id;
            req.session.species_wanted = users.species_wanted;
            req.session.person_name=users.person_name;
            req.session.loggedIn = true;

            res.json({ user: users, message: 'You are now logged in!' });
        });
    });
});


router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

// PUT /api/users/1
router.put('/:id', Auth, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(users => {
            if (!users[0]) {
                res.status(404).json({ message: 'There is No user with this id' });
                return;
            }
            res.json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete('/:id', Auth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(users => {
            if (!users) {
                res.status(404).json({ message: 'There is No user with this id' });
                return;
            }
            res.json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;