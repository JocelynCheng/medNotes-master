var dict = [];

function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i, a, b;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
      //console.log(x.length)
       console.log('inside for loop of function' );
    }
    a = x.elements[0].value;
    b = x.elements[1].value;
    myText = text + "keyword definition pair saved."
    dict.push({
    key:   a,
    value: b
    });
    //console.log("a")
    //console.log(myText);]
    document.getElementById("demo").innerHTML = myText;
}

function myFunction2() {
  dictLength = Object.keys(dict).length;
  console.log(dictLength);
  console.log(typeof dict[0]);
  for (i= 0; i<dictLength; i++){
    //dictionaryValues +=
     console.log(dict[i]);

// CREATE AN SQL DATABASE WITH THE Values
// DELETE Button

  }
  /*
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
       console.log('inside for loop of stored values' );
       console.log(i);
    }
    document.getElementById("demo").innerHTML = text;
    */
}

function clearResultsBox() {
    //var x = document.getElementById("frm1");
    var text = "";
    document.getElementById("demo").innerHTML = text;
}
