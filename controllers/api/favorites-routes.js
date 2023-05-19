const router = require('express').Router();
const { userFavorites } = require('../../models');

router.post("/:id", async(req,res) => {
    try{
      const favorite = await userFavorites.create({pets_id: req.params.id, user_id: req.session.user_id})
      res.json(200).end()
    }
    catch(err) {
      res.status(400).json(err)
    }
  })

  module.exports = router;