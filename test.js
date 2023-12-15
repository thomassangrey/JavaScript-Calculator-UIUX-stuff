  function btnClick(elem) {
    dom = document.getElementById(elem);
    dom.click();
    d3.select(dom).style("background-color", "rgba(255,255,255,0.5)");
  }
  
  function clickit(elem, assertion=null) {
	  function pollPromise() {
	    try {
		    if (xpress.promise) {
		    }
		    else {
		    	console.log("polling");
		    	setTimeout(pollPromise, 100);
		    }
		  }
	    catch(error) {
	    	setTimeout(pollPromise, 100);
	    }	
	  }

	  pollPromise();
	  xpress.promise.then(function (){
	  	    if (elem == "b34")
	  	    	console.log(d3.select("#screen").text());
          if (assertion) {
          	assert.equal(xpress.answer, assertion);	
          }
          else {
            btnClick(elem);
          }
	  }).finally(() => xpress.promise = null);
  }


describe("Tests using simulated click events", function() {
  
  it("tests whether click events -> (2+4)*10 = 60", function() {
 
	  btnClick("b32");  // 1st click event will trigger a promise 
	  clickit("b21");   // created by process() and stored in {xpress} 
	  clickit("b13");
	  clickit("b10");
	  clickit("b33");
	  clickit("b04");
	  clickit("b20");
	  clickit("b30");
	  clickit("b34");
	  clickit(null, "60");
 });

  it("tests whether click events -> 8*√(64)+8 = 72", function() {
 
	  clickit("b01");
	  clickit("b04");
	  clickit("b23");
	  clickit("b12");
	  clickit("b10");
	  clickit("b33");
	  clickit("b13");
    clickit("b01");
	  clickit("b34");
	  clickit(null, "72");
 });

});


describe("Tests using simulated click events", function() {

  it("tests whether click events -> 7+8+9 = 24", function() {
 
	  clickit("b00");
	  clickit("b13");
	  clickit("b01");
	  clickit("b13");
	  clickit("b02");
	  clickit("b34");
	  clickit(null, "24");
 });

  it("tests whether click events -> ln(exp(5)) + 3*√(4) = 11", function() {
 
	  clickit("b05");
	  clickit("b06");
	  clickit("b11");
	  clickit("b33");
	  clickit("b33");
	  clickit("b13");
	  clickit("b22");
    clickit("b04");	  
	  clickit("b23");
    clickit("b10");
    clickit("b33");    
	  clickit("b34");
	  clickit(null, "11");
 });

  it("tests whether click events -> 8*9+3+8 = 83", function() {
 
	  clickit("b01");
	  clickit("b04");
	  clickit("b02");
	  clickit("b13");
	  clickit("b22");
	  clickit("b13");
    clickit("b01");
	  clickit("b34");
	  clickit(null, "83");
 });

});

describe("Tests using simulated click events", function() {

  it("tests whether click events -> 8*9+3+8+3*cos(0) = 86", function() {
 
	  clickit("b01");
	  clickit("b04");
	  clickit("b02");
	  clickit("b13");
	  clickit("b22");
	  clickit("b13");
    clickit("b01");
    clickit("b13");
	  clickit("b22");
    clickit("b04");	  
	  clickit("b26");
    clickit("b30");
    clickit("b33");
	  clickit("b34");
	  clickit(null, "86");
 });

  it("tests whether click events -> 108/9/3/2 = 2", function() {
 
	  clickit("b20");
	  clickit("b30");
	  clickit("b01");
	  clickit("b03");
	  clickit("b02");
	  clickit("b03");
	  clickit("b22");
	  clickit("b03");
    clickit("b21");
	  clickit("b34");
	  clickit(null, "2");
 });


});



















