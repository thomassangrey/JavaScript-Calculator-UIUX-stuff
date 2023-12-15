"use strict"


function process(xpress, s) { 
	let P = new Promise( function(resolve,reject) { 
		xpress.buildXpress(s);
		resolve(s + "button pressed and processed");
	}).catch(() => alert("error")); 
	xpress.promise = P;
}


let xpress = { JSexpression: '',
               expression: '',
               promise: undefined,
               min: undefined,
               answer: undefined,
               buildXpress(s) {
	    
	    let res;
	    let JSres;
	    switch (s) {
	      case    '=': res = eval(this.JSexpression);
	                   JSres = this.expression  + ' = ' + res;
	                   this.answer  = res;
	                   //alert(JSres + "ans = " + res);
	                   break;
	      case  'exp': res = this.expression + 'exp(';
	                   JSres = this.JSexpression + 'Math.exp(';
	                   break;
	      case   'ln': res = this.expression + 'ln(';
	                   JSres = this.JSexpression + 'Math.log(';
	                   break;
	      case  'sin':
	                   res = this.expression + 'sin(';
	                   JSres = this.JSexpression + 'Math.sin(';
	                   break;
	      case  'cos':
	                   res = this.expression + 'cos(';
	                   JSres = this.JSexpression + 'Math.cos(';
	                   break;
	      case  'min':
	                   res = this.expression;
	                   JSres = this.JSexpression;
	                   
	                   if (res!='') {
	                   	 	 this.min = eval(this.JSexpression);
	                   	 }
	                   	 else {
                         this.min = this.answer;
	                   	 }
	                   break;
	      case  'mout':
	                   res = this.expression + this.min;
	                   JSres = this.JSexpression + this.min;
	                   break;
	      case   'tan':
	                   res = this.expression + 'tan(';
	                   JSres = this.JSexpression + 'Math.tan(';
	                   break;
	      case  '√':
	                   res = this.expression + '√(';
	                   JSres = this.JSexpression + 'Math.sqrt(';
	                   break;
	      case  'clr':
	                   res = '';
	                   JSres = '';
	                   break;
	      default:
	                   res = this.expression + s;
	                   JSres = this.JSexpression + s;
 	    }
	    this.JSexpression = JSres;
	    this.expression = res;
	    d3.select("#screen").text(res);
	    if (s == '=') {
	    	this.expression = '';
	      this.JSexpression = '';
	    }
    }
}

function initialize(xpress) {
	d3.selectAll(".button").on("mouseenter", function () {
        d3.select(this).style("background-color", "rgba(255,0,0,.5)");
	});
	d3.selectAll(".button").on("mouseleave", function () {
        d3.select(this).style("background-color", "rgba(255,255,255,0.5)");
    });
    d3.selectAll(".button").on("click", function () {
        d3.select(this).style("background-color", "rgba(255,0,0,1)");
        let P = process(xpress, d3.select(this).text());
    });
    d3.selectAll(".button").on("mouseup", function () {
        d3.select(this).style("background-color", "rgba(255,255,255,1)");
	});
}

