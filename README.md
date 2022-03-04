# thorium
Backend cohort Feb 2022 - May 2022

Assigment : https://docs.google.com/document/d/1F7b6nA1l8UcA8QgRktSGzk91k8JqJeNBtOCluTh_DCE/edit

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    res.send({ msg: "all good"})
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)