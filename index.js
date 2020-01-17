
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  function superbowlWin(arr) {

    let findWin =arr.find(function (w)  { return w ['result'] === "W"})
      if (findWin === undefined){
        return findWin;
      }
      else {
         return findWin['year'];
      }
    })
  }
>>>>>>> d38187a43e3c0453a60b63480a6d940674819e95
