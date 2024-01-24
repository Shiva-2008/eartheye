function toggle() {
    document.getElementById('toggle').classList.toggle('nact')
    document.getElementById('comment').classList.toggle('noco')

  
}


function may() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('whatwedo').style.animationName = 'anima'
document.getElementById('whatwedo').style.animationDuration = '0.5s'
document.getElementById('whatwedo').style.animationIterationCount = '1'
document.getElementById('hometext').style.animationName = 'anima'
document.getElementById('hometext').style.animationDuration = '0.5s'
document.getElementById('hometext').style.animationIterationCount = '1'

    }
}



var i = 0
var j = 0

function day() {


txt1 = 'Empowered to enact with '
txt2 = 'Environment in your Hands'

if (i < txt1.length) {
   document.getElementById("trxster").innerHTML += txt1.charAt(i);

   i = i+1
   document.getElementById("blinker2").style.display = 'none'

   setTimeout(day, 50);

}
else if(i == txt1.length){
    document.getElementById("blinker1").style.display = 'none'
    document.getElementById("blinker2").style.display = 'inline'


    
    if (j < txt2.length) {
       document.getElementById("trxsterr").innerHTML += txt2.charAt(j);
       j = j+1
       setTimeout(day, 50);
    
    }
    else if (j == txt2.length) {
        document.getElementById("blinker2").classList.add('blinker')
        document.getElementById("blinker2").innerHTML = '!'

    }


}


}
function pusher()

{
setTimeout(pusher , 3000)

document.getElementsByTagName('iframe').item(0).style.display = 'none'
}


function bay() {

    }

function prec() {
   var pre = document.getElementById('precaution').classList.toggle('noco')
    var prebut = document.getElementById('prebut')

if (prebut.innerHTML == 'Click to Show Precautions') {
    prebut.innerHTML = 'Hide Precautions'
}
else{
    prebut.innerHTML = 'Click to Show Precautions'
}
}
function play() 
{
    vi = document.getElementById('shot')

}


function select(a,b) 
{
  var state = document.getElementById(a)
    var district = document.getElementById(b)
district.innerHTML = ""

if (state.value == "TN") {
    var disarray = ["Ariyalur|ariyalur","Chengalpattu| ",
    "Chennai| ",
    "Coimbatore| ",
    "Cuddalore |",
    "Dharmapuri |",
    "Dindigul| ",
    "Erode| ",
    "Kallakurichi| ",
    "Kancheepuram| ",
    "Kanyakumari| ",
    "Karur| ",
    "Krishnagiri| ",
    "Madurai| ",
    "Mayiladuthurai" ,
    "Nagapattinam| ",
    "Namakkal| ",
    "Nilgiris| ",
    "Perambalur| ",
    "Pudukottai| ",
    "Ramnad| ",
    "Ranipet| ",
    "Salem| ",
    "Sivagangai| ",
    "Tenkasi| ",
    "Thanjavur| ",
    "Theni| ",
    "Tirunelveli| ",
    "Tirupathur| ",
    "Tiruppur| ",
    "Tiruvallur| ",
    "Tiruvannamalai| ",
    "Tiruvarur| ",
    "Trichy| ",
    "Tuticorin| ",
    "Vellore| ",
    "Villupuram| ",
    "Virudhunagar| "]



} else if(state.value == "AP"){

    var disarray = ['hello']
    
}


for (var opted in disarray) {
    var dstorage = disarray[opted].split("|");
  var newoption =  document.createElement("option")
  newoption.innerHTML = dstorage[0]
district.options.add(newoption)


    
}

}

function saver() {
    var almost = document.getElementById('slct1')
    var almostthere = almost.options[almost.selectedIndex].text
    var almostyes = document.getElementById('slct2')
    var almoost = almostyes.selectedIndex
    var almostthereyes = almostyes.options[almostyes.selectedIndex].text
    localStorage.setItem('state' , almostthere)
    localStorage.setItem('disnumber' , almoost)
    localStorage.setItem('district' , almostthereyes)
    var airchecker = 0
    var treechecker = 0
    var landchecker = 0
    if (document.getElementById('showaqi').checked) {
airchecker = 1   
}



if (document.getElementById('showtree').checked) {
    treechecker = 1

}



if (document.getElementById('showland').checked) {
     landchecker = 1



}

localStorage.setItem('aircheck' , airchecker)
localStorage.setItem('landcheck' , landchecker)

localStorage.setItem('treecheck' , treechecker)

}




function doer() {



if (localStorage.getItem('aircheck') != 1) {
    document.getElementById('disair').style.display = 'none'
}

if (localStorage.getItem('landcheck') != 1) {
    document.getElementById('disland').style.display = 'none'

}
if (localStorage.getItem('treecheck') != 1) {
    document.getElementById('distree').style.display = 'none'

}




    const TN = [
        {name:	"Ariyalur"	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ariyalur_in_Tamil_Nadu_%28India%29.svg/250px-Ariyalur_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5"		,
       key :  ""		,
       trees :  " " 		,
       }		,
       {name:	"Chengalpattu "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/5/51/Chengalpattu_in_Tamil_Nadu_%28India%29.svg"		,
       ppol :  " PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Chennai "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Chennai_in_Tamil_Nadu_%28India%29.svg/250px-Chennai_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5, CO"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Coimbatore "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Coimbatore_in_Tamil_Nadu_%28India%29.svg/250px-Coimbatore_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Cuddalore "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Cuddalore_in_Tamil_Nadu_%28India%29.svg/250px-Cuddalore_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Dharmapuri "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Dharmapuri_in_Tamil_Nadu_%28India%29.svg/250px-Dharmapuri_in_Tamil_Nadu_%28India%29.svg.png "		,
       ppol :  " PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Dindigul "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Dindigul_in_Tamil_Nadu_%28India%29.svg/250px-Dindigul_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  " NO2  , PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Erode "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Erode_in_Tamil_Nadu_%28India%29.svg/250px-Erode_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Kallakurichi "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kallakurichi_in_Tamil_Nadu_%28India%29.svg/1200px-Kallakurichi_in_Tamil_Nadu_%28India%29.svg.png "		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Kancheepuram "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kanchipuram_in_Tamil_Nadu_%28India%29.svg/1492px-Kanchipuram_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  " PM10"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Kanyakumari "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kanyakumari_in_Tamil_Nadu_%28India%29.svg/230px-Kanyakumari_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Karur "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Karur_in_Tamil_Nadu_%28India%29.svg/250px-Karur_in_Tamil_Nadu_%28India%29.svg.png "		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Krishnagiri "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Krishnagiri_in_Tamil_Nadu_%28India%29.svg/250px-Krishnagiri_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Madurai "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Madurai_in_Tamil_Nadu_%28India%29.svg/250px-Madurai_in_Tamil_Nadu_%28India%29.svg.png "		,
       ppol :  "PM2.5, PM10 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Mayiladuthurai" ,	
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Mayiladuthurai_in_Tamil_Nadu_%28India%29.svg/250px-Mayiladuthurai_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Nagapattinam "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nagapattinam_in_Tamil_Nadu_%28India%29.svg/250px-Nagapattinam_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5, PM10, O3 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Namakkal "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Namakkal_in_Tamil_Nadu_%28India%29.svg/250px-Namakkal_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Nilgiris "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Nilgiris_in_Tamil_Nadu_%28India%29.svg/250px-Nilgiris_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5, PM10, O3 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Perambalur "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Perambalur_in_Tamil_Nadu_%28India%29.svg/250px-Perambalur_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Pudukottai "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pudukottai_in_Tamil_Nadu_%28India%29.svg/250px-Pudukottai_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  " PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Ramnad "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/d/d8/Ramanathapuram_in_Tamil_Nadu_%28India%29.svg "		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Ranipet "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ranipet_in_Tamil_Nadu_%28India%29.svg/250px-Ranipet_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Salem "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Salem_in_Tamil_Nadu_%28India%29.svg/250px-Salem_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  " PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Sivagangai "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sivaganga_in_Tamil_Nadu_%28India%29.svg/250px-Sivaganga_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  " PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Tenkasi "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tenkasi_in_Tamil_Nadu_%28India%29.svg/1650px-Tenkasi_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  " PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Thanjavur "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Thanjavur_in_Tamil_Nadu_%28India%29.svg/250px-Thanjavur_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5, PM10, NO2 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Theni "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Theni_in_Tamil_Nadu_%28India%29.svg/250px-Theni_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Tirunelveli "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tirunelveli_in_Tamil_Nadu_%28India%29.svg/250px-Tirunelveli_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5, PM10, O3, NO2 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Tirupathur "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Tirupattur_in_Tamil_Nadu_%28India%29.svg/1492px-Tirupattur_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  " PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Tiruppur "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Tiruppur_in_Tamil_Nadu_%28India%29.svg/250px-Tiruppur_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  " PM2.5, PM10"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Tiruvallur "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tiruvallur_in_Tamil_Nadu_%28India%29.svg/483px-Tiruvallur_in_Tamil_Nadu_%28India%29.svg.png "		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Tiruvannamalai "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tiruvannamalai_in_Tamil_Nadu_%28India%29.svg/250px-Tiruvannamalai_in_Tamil_Nadu_%28India%29.svg.png "		,
       ppol :  " PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Tiruvarur "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Tiruvarur_in_Tamil_Nadu_%28India%29.svg/250px-Tiruvarur_in_Tamil_Nadu_%28India%29.svg.png "		,
       ppol :  " PM2.5"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Trichy "	,
        aq :  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tiruchirappalli_in_Tamil_Nadu_%28India%29.svg/250px-Tiruchirappalli_in_Tamil_Nadu_%28India%29.svg.png "		,
       ppol :  "PM2.5 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Tuticorin "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/c/ca/Thoothukudi_in_Tamil_Nadu_%28India%29.svg"		,
       ppol :  " PM2.5, PM10, O3"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Vellore "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/4/44/Vellore_in_Tamil_Nadu_%28India%29.svg"		,
       ppol :  " PM2.5, O3, NO2"		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Villupuram "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Viluppuram_in_Tamil_Nadu_%28India%29.svg/1200px-Viluppuram_in_Tamil_Nadu_%28India%29.svg.png"		,
       ppol :  "PM2.5, PM10 "		,
       ldata :  " "		,
       trees :  " " 		,
       }		,
       {name:	"Virudhunagar "	,
        aq :  " https://upload.wikimedia.org/wikipedia/commons/f/fe/Virudhunagar_in_Tamil_Nadu_%28India%29.svg"		,
       ppol :  " PM2.5, PM10, O3"		,
       ldata :  " "		,
       trees :  " " 		,
       }		    
    
    ]


 
var state = localStorage.getItem('state')
var district = localStorage.getItem('district')
var disnumber = localStorage.getItem('disnumber')
    document.getElementById('statename').innerHTML = state
    document.getElementById('disname').innerHTML = district
if (state == 'Tamil Nadu' ) {
    var name = TN[disnumber].name
    var tree = TN[disnumber].trees
    var aq = TN[disnumber].aq
    var ppol = TN[disnumber].ppol

    
}
document.getElementById('disimg').setAttribute('src' , aq )

var mcom = document.getElementById('majorcomm')
var pollutant = document.getElementById('prime')
var prec = document.getElementById('precaution')
var disair = document.getElementById('disair')
var precbox = document.getElementById('precbx')
var preb = document.getElementById('prebut')
disair.style.display = 'none'
document.getElementById('truey').style.display = 'none'

const timm = setTimeout(loll , 6500)



function loll(){



document.getElementById('primez').innerHTML += ppol


pollutant.innerHTML +=  document.getElementsByClassName('outdoor-pm25-value').item(disnumber).innerHTML

var hh = document.getElementsByClassName('aqiValue').item(disnumber).textContent
document.getElementById('aqi').innerHTML = hh
var aq = document.getElementById('aqi').innerHTML
if (localStorage.getItem('aircheck') == 1) {
    disair.style.display = 'block'

}

document.getElementById('truey').style.display = 'flex'
document.getElementById('fakey').style.display = 'none'


if (aq <= 50) {

    disair.style.backgroundColor = '#00dd00'
mcom.innerHTML = "Good"
prec.innerHTML = 'You are living in a safe area'
precbox.style.backgroundColor = '#b7ff8d'

}

else if (aq > 50 && aq <= 100) {
    disair.style.backgroundColor = '#ffff47'
    mcom.innerHTML = "Moderate and Safe"
    prec.innerHTML = '<li> Close your windows to avoid dirty outdoor air</li>  <br> <li> Sensitive groups should reduce outdoor exercise. </li> &nbsp'
    precbox.style.backgroundColor = '#ffe599'

    


}
else if (aq > 100 && aq <= 200) {
    disair.style.backgroundColor = '#ffb121'
    mcom.innerHTML = "Unhealthy for Sensitive Groups"
    prec.innerHTML = '<li>Run an air purifier</li>  <br><li>  Everyone should reduce outdoor exercise</li>  <br> <li>Sensitive groups should wear a mask outdoors</li>  <br>   <li>Close your windows to avoid dirty outdoor air </li> '
    precbox.style.backgroundColor = '#f6b26b'



}
else if (aq > 200 && aq <= 300) {
    disair.style.backgroundColor = '#ff5b5b'
    mcom.innerHTML = " Unhealthy"
    prec.innerHTML = '<li>Avoid prolonged activity outdoors and consider moving it indooors </li> <br> <li>If belonging to a sensitive group avoid all activity outdoors</li> '
    precbox.style.backgroundColor = '#ffa59e'


}
else if (aq > 300 && aq <= 400) {
    disair.style.backgroundColor = '#57033a'
    mcom.innerHTML = "Very Unhealthy and Poor"
    preb.style.color = 'white'
document.getElementById('prime').style.color = 'white'
    precbox.style.backgroundColor = '#ac5b83'
    precbox.style.color = 'white'

    disair.style.color = 'white'
    prec.innerHTML = '<li>Avoid all activty outdoors</li>  <br> <li>If belonging to a sensitive group remain indoors and follow tips for keeping particle levels low indoor</li> '



}
else if (aq > 400 ) {
    disair.style.color = 'white'
    precbox.style.color = 'white'
    preb.style.color = 'white'
    document.getElementById('prime').style.color = 'white'

    disair.style.backgroundColor = 'maroon'
    mcom.innerHTML = "Toxic and Hazardous"
    prec.innerHTML = '<li>Avoid all activty outdoors</li> <br> <li>If belonging to a sensitive group remain indoors and follow tips for keeping particle levels low indoor</li> '
    precbox.style.backgroundColor = '#4c1818'


}

var pollutant = document.getElementById('prime')

if (pollutant.includes('PM')) {
    
    document.getElementById('otree').innerHTML +=  sucess
    document.getElementById('itree').innerHTML +=  Sucess 
    document.getElementById('head').innerHTML +=     '<link rel="stylesheet" href="no.css">'
     
} 


setTimeout(treer , 500 )























}

function treer(){
 
}

  
}

function dhd() {
document.getElementById('precaution').classList.toggle('noco')
var datqi = document.getElementById('dataaqi').children

for(var i in datqi.length) {
if(document.getElementById('dataaqi').children.item(i).id != 'Tamil Nadu' )

{
 var oho =   document.getElementById('dataaqi').children.item(i).id
 alert(oho)
 oho.remove()
}

}
}
