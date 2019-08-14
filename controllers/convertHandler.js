/*
*
*
*       Complete the handler logic below
*       
*       
*/

var inputUnit= ['gal','l','mi','km','lbs','kg'];
//tach so
function LaySoTruocDau_slash(inpy2){

  var startingNumber2 = inpy2.match(/\d+\.\d+|\d+/g);
return startingNumber2[0]
}



function LaySoSauDau_slash(unput3){


  var startingNumber3=unput3.split('/');

  if (typeof(startingNumber3[1]) !== "undefined"){
    return startingNumber3[1];
  }

return 1;


}



function ToanBoSo(inpy){
  
  var startingNumber = ( inpy.match(/\d+\.\d+[.,\/]?\d+[,.]?\d+|\d+[\/]?\d+[,.]?\d+|\d+\.\d+[.,\/]?\d+|\d+[.,\/]?\d+|\d+/g))
return startingNumber
}



function laychuoi(inchuoi){
  var chuoi=inchuoi.match(/[a-zA-Z]+/g);

return chuoi;
}

//ket thuc tach so

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result=1;
    if(!isNaN(input[0])){

      chuoiso =ToanBoSo(input);
      console.log("Toan bo so : "+chuoiso[0]);


      SoTruoc_Slash=LaySoTruocDau_slash(chuoiso[0]);
      console.log("truoc  dau / la:" +  SoTruoc_Slash)


      SoSau_Slash=LaySoSauDau_slash(chuoiso[0]);
      console.log("sau dau / la: "+ SoSau_Slash)


      var result=parseFloat(SoTruoc_Slash)/ parseInt(SoSau_Slash);
     // console.log(result);
    }

   
    return result;
  };
  


  this.getUnit = function(input) {
   
    result=laychuoi(input);
  
   // var kq=result[0].toLocaleLowerCase();

   // var kq1=inputUnit.indexOf(kq);

if(result ===null){
  return null;
}

    return result[0];
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
   if(initUnit ===null){
     return result =null;
   }
   // var n = inputUnit.includes(initUnit);
    var kq2=initUnit.toLocaleLowerCase()
    if(true){
      if(kq2 ==='gal'){
        result = "l";
      }
      else if(kq2==="l"){
        result = "gal"
      }
      else if(kq2==="mi"){
        result ="km"
      }
      else if(kq2==="km"){
        result ="mi"
      }

      else if(kq2==="lbs"){
        result ="kg"
      }
      else if(kq2==="kg"){
        result ="lbs"
      }


    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if(initUnit ===null){
      return result=null;
    }


    var chuyenChuoi=initUnit.toLocaleLowerCase()

    if(chuyenChuoi==="gal"){
      result =initNum*galToL;
    }
    else if(chuyenChuoi ==="l"){
      result=initNum /galToL;
    }
    else if(chuyenChuoi ==="lbs"){
      result=initNum*lbsToKg;
    }
    else if(chuyenChuoi ==="kg"){
      result =initNum/lbsToKg;
    }
    else if(chuyenChuoi==="mi"){
      result=initNum*miToKm;
    }
    else if(chuyenChuoi ==="km"){
      result=initNum/miToKm;
    }

//console.log(result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    if(initUnit === null){
      result={"String":"Khong chuyem Doi duoc"}
    }
else{


    result={"initNum": initNum ,"initUnit":initUnit ,"returnNum": returnNum ," returnUnit": returnUnit ," String":` ${initNum} ${initUnit} miles converts to ${returnNum} ${returnUnit}` }
}
   console.log(result)
    return result;
  };
  
}

module.exports = ConvertHandler;
