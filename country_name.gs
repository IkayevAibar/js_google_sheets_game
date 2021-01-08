function clear_protection(){
  var ss = SpreadsheetApp.getActive();
  var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
  for (var i = 0; i < protections.length; i++) {
    var protection = protections[i];
    if (protection.canEdit()) {
      protection.remove();
    }
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function get_countries(){
  var doc = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1hxxIlHxJ1ZuIrkddn30twDj9Y_iTLmvHSwc1XDUdDXw/edit');
  
  let countries = {
    country_1:get_country('https://docs.google.com/spreadsheets/d/16qAxCOpBEK0ndtuEwuKsN500gA0K1Xbr3wT5p3cffvU/edit'),
    country_2:get_country('https://docs.google.com/spreadsheets/d/16qAxCOpBEK0ndtuEwuKsN500gA0K1Xbr3wT5p3cffvU/edit'),
    country_3:get_country('https://docs.google.com/spreadsheets/d/16qAxCOpBEK0ndtuEwuKsN500gA0K1Xbr3wT5p3cffvU/edit'),
    country_4:get_country('https://docs.google.com/spreadsheets/d/16qAxCOpBEK0ndtuEwuKsN500gA0K1Xbr3wT5p3cffvU/edit'),
    country_5:get_country('https://docs.google.com/spreadsheets/d/16qAxCOpBEK0ndtuEwuKsN500gA0K1Xbr3wT5p3cffvU/edit'),
    country_6:get_country('https://docs.google.com/spreadsheets/d/16qAxCOpBEK0ndtuEwuKsN500gA0K1Xbr3wT5p3cffvU/edit'),
  }
}
function get_country(country_doc){
  // var country_doc= SpreadsheetApp.openByUrl();
  let country = {
    country_name:country_doc.getRange('B5').getValue().toString().trim(),
    rocket_tech:country_doc.getRange('C21').getValue(),
    rockets:country_doc.getRange('E18').getValue(),
    money:country_doc.getRange('G5').getValue(),
    city_1:{
      city_name:country_doc.getRange('B8').getValue().toString().trim(),
      shield:country_doc.getRange('B25').getValue(),
      status:country_doc.getRange('B26').getValue()
    },
    city_2:{
        city_name:country_doc.getRange('C8').getValue().toString().trim(),
        shield:country_doc.getRange('C25').getValue(),
        status:country_doc.getRange('C26').getValue()
    },
    city_3:{
        city_name:country_doc.getRange('D8').getValue().toString().trim(),
        shield:country_doc.getRange('D25').getValue(),
        status:country_doc.getRange('D26').getValue()
    },
    city_4:{
      city_name:country_doc.getRange('E8').getValue().toString().trim(),
      shield:country_doc.getRange('E25').getValue(),
      status:country_doc.getRange('E26').getValue()
    }
  }
  console.log(country)
  return country;
}

// function get_country_info(){
//   var doc1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Лист информации.')

//   var rocket_tech=false;
//   var rockets=0;
//   var city_1={shield:parseInt(doc1.getRange('B25').getValue().toString()),status:parseFloat(doc1.getRange('B26').getValue().toString())}
//   var city_2={shield:parseInt(doc1.getRange('C25').getValue().toString()),status:parseFloat(doc1.getRange('C26').getValue().toString())}
//   var city_3={shield:parseInt(doc1.getRange('D25').getValue().toString()),status:parseFloat(doc1.getRange('D26').getValue().toString())}
//   var city_4={shield:parseInt(doc1.getRange('E25').getValue().toString()),status:parseFloat(doc1.getRange('E26').getValue().toString())}
//   var money = 160;

//   var country = {
//     rocket_tech:rocket_tech,
//     rockets:rockets,
//     city_1:city_1,
//     city_2:city_2,
//     city_3:city_3,
//     city_4:city_4,
//     money:money,
//   }
//   return country;
// }
function rocket_to(from_,to_){
  if(from_.rockets>0 && from_.rocket_tech===true){
      if(to_.length>0){
        for(let city of to_){
          if(city.shield>0){
            city.shield-=1
            city.status-=0.3
          }
          else{
            city.status=0;
          }
          from_.rockets-=1
        }
      }
  }
}

function gameround(doc,country){
  country.money-=parseInt(doc.getRange("I5").getValue().toString())

    if(doc.getRange("E13").getValue()=="Да"){
      country.rocket_tech = true
    }
    if(doc.getRange("G14").getValue()==true){
      country.city_1.shield+=1
    }
    if(doc.getRange("G15").getValue()==true){
      country.city_2.shield+=1
    }
    if(doc.getRange("G16").getValue()==true){
      country.city_3.shield+=1
    }
    if(doc.getRange("G17").getValue()==true){
      country.city_4.shield+=1
    }
    if(doc.getRange("C10").getValue()=="Да"){
      country.city_1.status+=0.25
    }
    if(doc.getRange("E10").getValue()=="Да"){
      country.city_2.status+=0.25
    }
    if(doc.getRange("F10").getValue()=="Да"){
      country.city_3.status+=0.25
    }
    if(doc.getRange("G10").getValue()=="Да"){
      country.city_4.status+=0.25
    }
    if(doc.getRange("G13").getValue()>0){
      country.rockets+=doc.getRange("G13").getValue()
    }
    if(doc.getRange("I20").getValue()==2){
      // rocket_to(country,)
    }
    country.money+=(300*country.city_1.status)+(300*country.city_2.status)+(300*country.city_3.status)+(300*country.city_4.status)
}

function update_country_info(){
  // country = get_country_info()
  country = get_country(SpreadsheetApp.getActiveSpreadsheet());

  var doc1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Лист информации.')
  var doc2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Первый ход.')
  var doc3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Второй ход.')
  var doc4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Третий ход.')
  var doc5 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Четвертый ход.')
  var doc6 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Пятый ход.')
  var doc7 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Шестой ход.')
  

  if(doc1.getRange("K7").getValue()===true && doc2.getRange("M8").getValue()===true){
    //first round
    gameround(doc2,country)
  }
  else{
    country.rocket_tech=false;
    country.rockets=0;
    country.city_1.shield=0;
    country.city_2.shield=0;
    country.city_3.shield=0;
    country.city_4.shield=0;
    country.city_1.status=1;
    country.city_2.status=0.8;
    country.city_3.status=0.6;
    country.city_4.status=0.4;
    country.money=160+300*country.city_1.status+300*country.city_2.status+300*country.city_3.status+300*country.city_4.status;
    
  }
  if(doc1.getRange("K7").getValue()===true && doc1.getRange("J7").getValue()===true && doc3.getRange("M8").getValue()===true){
    //second(2) round
    gameround(doc3,country)
  }
  if(doc1.getRange("K7").getValue()===true &&  doc1.getRange("J7").getValue()===true  && doc1.getRange("I10").getValue()===true && doc4.getRange("M8").getValue()===true){
    //third(3) round
    gameround(doc4,country)

  }
  if(doc1.getRange("K7").getValue()===true &&  doc1.getRange("J7").getValue()===true  && doc1.getRange("I10").getValue()===true && doc1.getRange("I12").getValue()===true && doc5.getRange("M8").getValue()===true){
    //fourth(4) round
    gameround(doc5,country)

  }
  if(doc1.getRange("K7").getValue()===true &&  doc1.getRange("J7").getValue()===true  && doc1.getRange("I10").getValue()===true && doc1.getRange("I12").getValue()===true && doc1.getRange("I15").getValue()===true && doc6.getRange("M8").getValue()===true){
    //fifth(5) round
    gameround(doc6,country)

  }
  if(doc1.getRange("K7").getValue()===true &&  doc1.getRange("J7").getValue()===true  && doc1.getRange("I10").getValue()===true && doc1.getRange("I12").getValue()===true && doc1.getRange("I15").getValue()===true && doc1.getRange("I18").getValue()===true && doc7.getRange("M8").getValue()===true){
    //sixth(6) round
    gameround(doc7,country)
  }
  
  
  // if(country.rocket_tech===false){
  //   doc2.getRange("G13").setValue(0).protect();
  // // }
  
  doc1.getRange("G5").setValue(country.money)
  doc1.getRange("B26").setValue(country.city_1.status)
  doc1.getRange("C26").setValue(country.city_2.status)
  doc1.getRange("D26").setValue(country.city_3.status)
  doc1.getRange("E26").setValue(country.city_4.status)
  
  doc1.getRange("B25").setValue(country.city_1.shield)
  doc1.getRange("C25").setValue(country.city_2.shield)
  doc1.getRange("D25").setValue(country.city_3.shield)
  doc1.getRange("E25").setValue(country.city_4.shield)

  doc1.getRange("E18").setValue(country.rockets)
  
  doc1.getRange("C18").setValue(country.rocket_tech==true?"Да":"Нет")
  
  if(country.rocket_tech==true){
    doc3.getRange("E13").protect()
    doc4.getRange("E13").protect()
    doc5.getRange("E13").protect()
    doc6.getRange("E13").protect()
    doc7.getRange("E13").protect()
  }

  console.log(country)

}

function cityfunction() {
  // Create a new Google Doc named 'Hello, world!'
  var doc = SpreadsheetApp.getActiveSheet().getRange("E18").getValues()[0][0].split(',').filter(n=>n)
  var doc2 = SpreadsheetApp.getActiveSheet().getRange("K20").getValues()[0][0].split(',').filter(n=>n)
  console.log(doc)
  if(doc.length<1){
    SpreadsheetApp.getActiveSheet().getRange("E18").setValue('Напишите сюда города!(через запятые)')
  }
  // console.log(doc2)
 
  city=[]
  for(let a of doc.flat()) {
    if(doc2.includes(a.trim())){city.push(a.trim())}
  }
  console.log(city)
  var unique_city = city.filter(onlyUnique);
  console.log(unique_city)
  return unique_city.join(',')
}

function countryfunction() {
  var ssa_name = SpreadsheetApp.getActive().getName()
  var doc = SpreadsheetApp.getActiveSheet().getRange("E19").getValues()[0][0].split(',').filter(n=>n)
  var doc2 = SpreadsheetApp.getActiveSheet().getRange("K21").getValues()[0][0].split(',').filter(n=>n)
  console.log(doc)
  if(doc.length<1){
    SpreadsheetApp.getActiveSheet().getRange("E19").setValue('Напишите сюда страны!(через запятые)')
  }
  console.log(doc2)
 
  country=[]
  for(let a of doc.flat()) {
    if(doc2.includes(a.trim()) && a.trim()!=ssa_name.trim()){
      country.push(a.trim())}
  }
  console.log(country)
  var unique_country = country.filter(onlyUnique);
  console.log(unique_country)
  return unique_country.join(',')
}

function onEdit(e){
  var range = e.range;
  // var spreadSheet = e.source;
  if(range.getColumn() == 5 && range.getRow() == 18 ){
    SpreadsheetApp.getActiveSheet().getRange("K18").setValue([cityfunction()])
  }
  if(range.getColumn() == 5 && range.getRow() == 19 ){
    SpreadsheetApp.getActiveSheet().getRange("K19").setValue([countryfunction()])
  }
  if(range.getColumn() == 11){
    update_country_info()
  }
}
