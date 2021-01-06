function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function get_country_info(){
  var rocket_tech=false;
  var rockets=0;
  var city_1={shield:0,status:1}
  var city_2={shield:0,status:0.8}
  var city_3={shield:0,status:0.6}
  var city_4={shield:0,status:0.4}
  var money = 160;

  var country = {
    rocket_tech:rocket_tech,
    rockets:rockets,
    city_1:city_1,
    city_2:city_2,
    city_3:city_3,
    city_4:city_4,
    money:money,
  }
  return country;
}
function update_country_info(){
  country = get_country_info()
  var doc1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Лист информации.')
  var doc2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Первый ход.')
  var doc3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Второй ход.')
  var doc4 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Третий ход.')
  var doc5 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Четвертый ход.')
  var doc6 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Пятый ход.')
  var doc7 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Шестой ход.')
  
  // var world_doc = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1hxxIlHxJ1ZuIrkddn30twDj9Y_iTLmvHSwc1XDUdDXw/edit')
  // console.log(world_doc.getSheetByName('Лист информации.').getRange("I5").getValue()==="Да"?true:false)
  
  // doc1.getRange("B11").setValue(country.city_1.status)
  // doc1.getRange("C11").setValue(country.city_2.status)
  // doc1.getRange("D11").setValue(country.city_3.status)
  // doc1.getRange("E11").setValue(country.city_4.status)
  
  // doc1.getRange("B10").setValue(country.city_1.shield>0?"Щит":"Не Щит")
  // doc1.getRange("C10").setValue(country.city_2.shield>0?"Щит":"Не Щит")
  // doc1.getRange("D10").setValue(country.city_3.shield>0?"Щит":"Не Щит")
  // doc1.getRange("E10").setValue(country.city_4.shield>0?"Щит":"Не Щит")
  
  // doc1.getRange("C18").setValue(country.rocket_tech==true?"Да":"Нет")
  
  country.money+=(300*country.city_1.status)+(300*country.city_2.status)+(300*country.city_3.status)+(300*country.city_4.status)
  // doc1.getRange("G5").setValue(country.money)

  if(doc1.getRange("K7").getValue()===true && doc2.getRange("M8").getValue()===true){
    //first round
    country.money-=parseInt(doc2.getRange("I5").getValue().toString())

    if(doc2.getRange("E13").getValue()=="Да"){
      country.rocket_tech = true
    }
    if(doc2.getRange("G14").getValue()==true){
      country.city_1.shield+=1
    }
    if(doc2.getRange("G15").getValue()==true){
      country.city_2.shield+=1
    }
    if(doc2.getRange("G16").getValue()==true){
      country.city_3.shield+=1
    }
    if(doc2.getRange("G17").getValue()==true){
      country.city_4.shield+=1
    }
    if(doc2.getRange("C10").getValue()=="Да"){
      country.city_1.status+=0.25
    }
    if(doc2.getRange("E10").getValue()=="Да"){
      country.city_2.status+=0.25
    }
    if(doc2.getRange("F10").getValue()=="Да"){
      country.city_3.status+=0.25
    }
    if(doc2.getRange("G10").getValue()=="Да"){
      country.city_4.status+=0.25
    }
    country.money+=(300*country.city_1.status)+(300*country.city_2.status)+(300*country.city_3.status)+(300*country.city_4.status)
  }
  if(doc1.getRange("K7").getValue()===true && doc1.getRange("J7").getValue()===true && doc3.getRange("M8").getValue()===true){
    //second(2) round
    country.money-=parseInt(doc3.getRange("I5").getValue().toString())

    if(doc3.getRange("E13").getValue()=="Да"){
      country.rocket_tech = true
    }
    if(doc3.getRange("G14").getValue()==true){
      country.city_1.shield+=1
    }
    if(doc3.getRange("G15").getValue()==true){
      country.city_2.shield+=1
    }
    if(doc3.getRange("G16").getValue()==true){
      country.city_3.shield+=1
    }
    if(doc3.getRange("G17").getValue()==true){
      country.city_4.shield+=1
    }
    if(doc3.getRange("C10").getValue()=="Да"){
      country.city_1.status+=0.25
    }
    if(doc3.getRange("E10").getValue()=="Да"){
      country.city_2.status+=0.25
    }
    if(doc3.getRange("F10").getValue()=="Да"){
      country.city_3.status+=0.25
    }
    if(doc3.getRange("G10").getValue()=="Да"){
      country.city_4.status+=0.25
    }
    country.money+=(300*country.city_1.status)+(300*country.city_2.status)+(300*country.city_3.status)+(300*country.city_4.status)

  }
  if(doc1.getRange("K7").getValue()===true &&  doc1.getRange("J7").getValue()===true  && doc1.getRange("I10").getValue()===true && doc4.getRange("M8").getValue()===true){
    //third(3) round
    country.money-=parseInt(doc4.getRange("I5").getValue().toString())

    if(doc4.getRange("E13").getValue()=="Да"){
      country.rocket_tech = true
    }
    if(doc4.getRange("G14").getValue()==true){
      country.city_1.shield+=1
    }
    if(doc4.getRange("G15").getValue()==true){
      country.city_2.shield+=1
    }
    if(doc4.getRange("G16").getValue()==true){
      country.city_3.shield+=1
    }
    if(doc4.getRange("G17").getValue()==true){
      country.city_4.shield+=1
    }
    if(doc4.getRange("C10").getValue()=="Да"){
      country.city_1.status+=0.25
    }
    if(doc4.getRange("E10").getValue()=="Да"){
      country.city_2.status+=0.25
    }
    if(doc4.getRange("F10").getValue()=="Да"){
      country.city_3.status+=0.25
    }
    if(doc4.getRange("G10").getValue()=="Да"){
      country.city_4.status+=0.25
    }
    country.money+=(300*country.city_1.status)+(300*country.city_2.status)+(300*country.city_3.status)+(300*country.city_4.status)

  }
  if(doc1.getRange("K7").getValue()===true &&  doc1.getRange("J7").getValue()===true  && doc1.getRange("I10").getValue()===true && doc1.getRange("I12").getValue()===true && doc5.getRange("M8").getValue()===true){
    //fourth(4) round
    country.money-=parseInt(doc5.getRange("I5").getValue().toString())

    if(doc5.getRange("E13").getValue()=="Да"){
      country.rocket_tech = true
    }
    if(doc5.getRange("G14").getValue()==true){
      country.city_1.shield+=1
    }
    if(doc5.getRange("G15").getValue()==true){
      country.city_2.shield+=1
    }
    if(doc5.getRange("G16").getValue()==true){
      country.city_3.shield+=1
    }
    if(doc5.getRange("G17").getValue()==true){
      country.city_4.shield+=1
    }
    if(doc5.getRange("C10").getValue()=="Да"){
      country.city_1.status+=0.25
    }
    if(doc5.getRange("E10").getValue()=="Да"){
      country.city_2.status+=0.25
    }
    if(doc5.getRange("F10").getValue()=="Да"){
      country.city_3.status+=0.25
    }
    if(doc5.getRange("G10").getValue()=="Да"){
      country.city_4.status+=0.25
    }
    country.money+=(300*country.city_1.status)+(300*country.city_2.status)+(300*country.city_3.status)+(300*country.city_4.status)
  }
  if(doc1.getRange("K7").getValue()===true &&  doc1.getRange("J7").getValue()===true  && doc1.getRange("I10").getValue()===true && doc1.getRange("I12").getValue()===true && doc1.getRange("I15").getValue()===true && doc6.getRange("M8").getValue()===true){
    //fifth(5) round
    country.money-=parseInt(doc6.getRange("I5").getValue().toString())

    if(doc6.getRange("E13").getValue()=="Да"){
      country.rocket_tech = true
    }
    if(doc6.getRange("G14").getValue()==true){
      country.city_1.shield+=1
    }
    if(doc6.getRange("G15").getValue()==true){
      country.city_2.shield+=1
    }
    if(doc6.getRange("G16").getValue()==true){
      country.city_3.shield+=1
    }
    if(doc6.getRange("G17").getValue()==true){
      country.city_4.shield+=1
    }
    if(doc6.getRange("C10").getValue()=="Да"){
      country.city_1.status+=0.25
    }
    if(doc6.getRange("E10").getValue()=="Да"){
      country.city_2.status+=0.25
    }
    if(doc6.getRange("F10").getValue()=="Да"){
      country.city_3.status+=0.25
    }
    if(doc6.getRange("G10").getValue()=="Да"){
      country.city_4.status+=0.25
    }
    country.money+=(300*country.city_1.status)+(300*country.city_2.status)+(300*country.city_3.status)+(300*country.city_4.status)

  }
  if(doc1.getRange("K7").getValue()===true &&  doc1.getRange("J7").getValue()===true  && doc1.getRange("I10").getValue()===true && doc1.getRange("I12").getValue()===true && doc1.getRange("I15").getValue()===true && doc1.getRange("I18").getValue()===true && doc7.getRange("M8").getValue()===true){
    //sixth(6) round
    country.money-=parseInt(doc7.getRange("I5").getValue().toString())

    if(doc7.getRange("E13").getValue()=="Да"){
      country.rocket_tech = true
    }
    if(doc7.getRange("G14").getValue()==true){
      country.city_1.shield+=1
    }
    if(doc7.getRange("G15").getValue()==true){
      country.city_2.shield+=1
    }
    if(doc7.getRange("G16").getValue()==true){
      country.city_3.shield+=1
    }
    if(doc7.getRange("G17").getValue()==true){
      country.city_4.shield+=1
    }
    if(doc7.getRange("C10").getValue()=="Да"){
      country.city_1.status+=0.25
    }
    if(doc7.getRange("E10").getValue()=="Да"){
      country.city_2.status+=0.25
    }
    if(doc7.getRange("F10").getValue()=="Да"){
      country.city_3.status+=0.25
    }
    if(doc7.getRange("G10").getValue()=="Да"){
      country.city_4.status+=0.25
    }
    country.money+=(300*country.city_1.status)+(300*country.city_2.status)+(300*country.city_3.status)+(300*country.city_4.status)

  }
  
  
  // if(country.rocket_tech===false){
  //   doc2.getRange("G13").setValue(0).protect();
  // // }
  
  doc1.getRange("G5").setValue(country.money)
  doc1.getRange("B11").setValue(country.city_1.status)
  doc1.getRange("C11").setValue(country.city_2.status)
  doc1.getRange("D11").setValue(country.city_3.status)
  doc1.getRange("E11").setValue(country.city_4.status)
  
  doc1.getRange("B10").setValue(country.city_1.shield>0?"Щит":"Не Щит")
  doc1.getRange("C10").setValue(country.city_2.shield>0?"Щит":"Не Щит")
  doc1.getRange("D10").setValue(country.city_3.shield>0?"Щит":"Не Щит")
  doc1.getRange("E10").setValue(country.city_4.shield>0?"Щит":"Не Щит")
  
  doc1.getRange("C18").setValue(country.rocket_tech==true?"Да":"Нет")
  
  console.log(country)

}

function cityfunction() {
  // Create a new Google Doc named 'Hello, world!'
  var doc = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Первый ход.').getRange("E18").getValues()[0][0].split(',').filter(n=>n)
  var doc2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Первый ход.').getRange("K20").getValues()[0][0].split(',').filter(n=>n)
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
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Первый ход.').getRange("K18").setValue([cityfunction()])
  }
  if(range.getColumn() == 5 && range.getRow() == 19 ){
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Первый ход.').getRange("K19").setValue([countryfunction()])
  }
  if(range.getColumn() == 11){
    update_country_info()
  }
}
