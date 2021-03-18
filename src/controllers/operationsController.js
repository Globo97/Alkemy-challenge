const operationsController = {
  registerNew: (req, res) => {
    res.render("form");
  },
    history: (req, res) => {
      res.render("history")


  },
};

module.exports = operationsController;
