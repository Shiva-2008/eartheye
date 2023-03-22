

function options() 
{

   const questions = [
      "What is meant by AQI or Air Quality Index" , 
      "What precautions should be taken for an AQI of 37" ,
      "What gas along with NO2 is responsible for acid rain" ,
      "The none greenhouse gas from the following is" ,
      "Select the incorrect option" ,
      
      
      
      ]    
      const answers = [
        {
opt1:'Index created by culmination of the effects of all pollutants in air' ,
opt2:'A number thats stands for the number of flammable atoms in the atmosphere at STP' ,
opt3:'A scale showing the rate of release of water molecules from bigeochemical cycles into the air' ,
opt4:'A value which predicts weather and climate' ,
copt:'Index created by culmination of the effects of all pollutants in air'
        } 
        ,

        {
         opt1:'Evacuate place immediately' ,
         opt2:'Wear mask always and close doors' ,
         opt3:'No need of any precaution' ,
         opt4:'Use high quality air purifiers' ,
         copt: 'No need of any precaution'
        } 
        ,

        {
         opt1:'O2' ,
         opt2:'SO2',
         opt3:'H2' ,
         opt4:'F2' ,
         copt: 'SO2'

        } 
        ,

        {
         opt1:'CO2' ,
         opt2:'Methane' ,
         opt3:'Water Vapour' ,
         opt4:'O2' ,
         copt: 'O2'

        } 
        ,

        {
         opt1:'Air quality index is not always fully accurate' ,
         opt2:'Planting trees has zero impact on the local ecosystem' ,
         opt3:'Air pollution is a serious crisis and needs to be addresed' ,
         opt4:'Trees are the lungs of our Earth' ,
         copt: 'Planting trees has zero impact on the local ecosystem'

        } 

         
         
         ]    

      var qn = document.getElementById('quizn').innerHTML
      document.getElementById('quizq').innerHTML = questions[qn]
      document.getElementById('opt1').innerHTML = answers[qn].opt1
      document.getElementById('opt2').innerHTML = answers[qn].opt2
      document.getElementById('opt3').innerHTML = answers[qn].opt3
      document.getElementById('opt4').innerHTML = answers[qn].opt4

}







function valuefinder1(h) {
var optstorer = document.getElementById(h).innerHTML
localStorage.setItem('optstorer' , optstorer)
document.getElementById(h).classList.toggle('bgchanger')
document.getElementById('opt2').classList.remove('bgchanger')
document.getElementById('opt3').classList.remove('bgchanger')
document.getElementById('opt4').classList.remove('bgchanger')


}

function valuefinder2(h) {
   var optstorer = document.getElementById(h).innerHTML
   localStorage.setItem('optstorer' , optstorer)
   document.getElementById(h).classList.toggle('bgchanger')
   document.getElementById('opt1').classList.remove('bgchanger')
   document.getElementById('opt3').classList.remove('bgchanger')
   document.getElementById('opt4').classList.remove('bgchanger')

   }

   function valuefinder3(h) {
      var optstorer = document.getElementById(h).innerHTML
      localStorage.setItem('optstorer' , optstorer)
      document.getElementById(h).classList.toggle('bgchanger')
      document.getElementById('opt1').classList.remove('bgchanger')

      document.getElementById('opt2').classList.remove('bgchanger')

      document.getElementById('opt4').classList.remove('bgchanger')

      }

      function valuefinder4(h) {
         var optstorer = document.getElementById(h).innerHTML
         localStorage.setItem('optstorer' , optstorer)
         document.getElementById(h).classList.toggle('bgchanger')
         document.getElementById('opt1').classList.remove('bgchanger')
         document.getElementById('opt2').classList.remove('bgchanger')
         document.getElementById('opt3').classList.remove('bgchanger')
        
 }
                  



































         var mark = 0

function qsubmit() {

if (  document.getElementById('opt1').classList.contains('bgchanger') || document.getElementById('opt2').classList.contains('bgchanger') || document.getElementById('opt3').classList.contains('bgchanger') || document.getElementById('opt4').classList.contains('bgchanger')) {
   var chosen = localStorage.getItem('optstorer')
  document.getElementById('opt1').classList.remove('bgchanger')
  document.getElementById('opt3').classList.remove('bgchanger')
  document.getElementById('opt4').classList.remove('bgchanger')
  document.getElementById('opt2').classList.remove('bgchanger')
  var qn = parseInt(document.getElementById('quizn').innerHTML)


  
  const questions = [
   "What is meant by AQI or Air Quality Index" , 
   "What precautions should be taken for an AQI of 37" ,
   "What gas along with NO2 is responsible for acid rain" ,
   "The none greenhouse gas from the following is" ,
   "Select the incorrect option" ,
   
   
   
   ]    
   const answers = [
     {
opt1:'Index created by culmination of the effects of all pollutants in air' ,
opt2:'A number thats stands for the number of flammable atoms in the atmosphere at STP' ,
opt3:'A scale showing the rate of release of water molecules from bigeochemical cycles into the air' ,
opt4:'A value which predicts weather and climate' ,
copt:'Index created by culmination of the effects of all pollutants in air'
     } 
     ,

     {
      opt1:'Evacuate place immediately' ,
      opt2:'Wear mask always and close doors' ,
      opt3:'No need of any precaution' ,
      opt4:'Use high quality air purifiers' ,
      copt: 'No need of any precaution'
     } 
     ,

     {
      opt1:'O2' ,
      opt2:'SO2',
      opt3:'H2' ,
      opt4:'F2' ,
      copt: 'SO2'

     } 
     ,

     {
      opt1:'CO2' ,
      opt2:'Methane' ,
      opt3:'Water Vapour' ,
      opt4:'O2' ,
      copt: 'O2'

     } 
     ,

     {
      opt1:'Air quality index is not always fully accurate' ,
      opt2:'Planting trees has zero impact on the local ecosystem' ,
      opt3:'Air pollution is a serious crisis and needs to be addresed' ,
      opt4:'Trees are the lungs of our Earth' ,
      copt: 'Planting trees has zero impact on the local ecosystem'

     } 

      
      
      ]    


          if (chosen == answers[qn].copt) {
        
            mark = mark + 1 
      }
            else{
            }



      qn = parseInt(document.getElementById('quizn').innerHTML) + 1
      document.getElementById('quizn').innerHTML = qn
      document.getElementById('quizq').innerHTML = questions[qn]
      document.getElementById('opt1').innerHTML = answers[qn].opt1
      document.getElementById('opt2').innerHTML = answers[qn].opt2
      document.getElementById('opt3').innerHTML = answers[qn].opt3
      document.getElementById('opt4').innerHTML = answers[qn].opt4
    
    
      if (qn == 4) {
        
    
         document.getElementById('scoremsg').innerHTML = 'Your score is: ' + mark +  ' out of 4' + '<br>'
setTimeout(0 , endq())
      }


}

  


}

function endq(){
   document.getElementById('quizbox').style.display = 'none'

}