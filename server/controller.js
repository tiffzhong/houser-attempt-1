module.exports = {
  getAll: (req, res) => {
    const database = req.app.get("db");
    database
      .get_houses()
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(error => {
        res.status(500).send({ errorMessage: "Something went wrong with Get" });
        console.log(error);
      });
  },

  addHouse: (req, res) => {
    const database = req.app.get("db");
    console.log("body", req.body);
    const {
      name,
      address,
      city,
      stateabbr,
      zip,
      image_url,
      mortgage,
      rent
    } = req.body;
    database
      .add_house([
        name,
        address,
        city,
        stateabbr,
        zip,
        image_url,
        mortgage,
        rent
      ])
      .then(() => res.status(200))
      .catch(error => {
        res.status(500).send({ errorMessage: "Something went wrong with Get" });
        console.log(error);
      });
  },

  deleteHouse: (req, res) => {
    const database = req.app.get("db");
    const { params } = req;
    database
      .delete_house(params.id)
      .then(() => res.sendStatus(200))
      .catch(error => {
        res.status(500).send({ errorMessage: "Something went wrong w Delete" });
        console.log(error);
      });
  }
};
