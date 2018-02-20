module.exports = function solveEquation(equation) {

    var equationWithoutSpaces = equation.replace(/\s/g,'');
    var regExpFactors =[/(\+|\-|^)\d{0,}(?=\*?x\^2)/g, /(\+|\-|^)\d{0,}(?=\*?x(?!\^2))/g, /(\+|\-|^)\d{1,}(?=$|\+|\-)/g];
    var factors =[0,0,0];

    for (var i = 0; i < regExpFactors.length; i++) {
        var tempResult = equationWithoutSpaces.match(regExpFactors[i]);
        if(tempResult == null){
            factors[i] = 0;
        }else if(tempResult[0].length == 1){
            if (tempResult[0].match(/\-|\+/g)!=null){
                factors[i] = tempResult[0]+'1';
            }
        } else{
            factors[i] = tempResult[0];
        }
    }

    var a = +(factors[0]);
    var b = +(factors[1]);
    var c = +(factors[2]);

    var result1= Math.round((- b + Math.sqrt(Math.pow(b,2) - 4 * a * c))/ (2 * a));
    var result2= Math.round((- b - Math.sqrt(Math.pow(b,2) - 4 * a * c))/ (2 * a));

    var resultArray = [result1, result2].sort( function( x, y ){ return x - y; });


    return resultArray;

}
