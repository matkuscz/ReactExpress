var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("API is working...");
});

router.get("/odmakano", function (req, res, next) {
  res.send(
    [
      {
      date: "1.1.2000",
      arrivalTime: "8:00",
      leaveTime: "16:30",
      },
      {
      date: "2.1.2000",
      arrivalTime: "9:00",
      leaveTime: "14:30",
      },
    ]
  );
});

module.exports = router;
