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



} else{

    var disarray = ['Not yet supported']
    
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
const treessug = [

{
    PM1: 'PANAPEN, JACKFRUIT  ' , 
    PM2:'PEEPAL, BANYAN',
    PM3: 'OLIVE,TAMARIND',
    PM4: ' KALIA, FIG, PINE',
    PM5: 'PANAMA TREE, EBONY',
    PM6:'INDIAN TAMARIND, 	SLASH PINE',
    PM7:'MAHOGANY, 	SLASH PINE',
    PM8:'MAHOGANY, 	SILVER BIRCH',
    PM9:'YEW, 	SILVER BIRCH',


} , 
]
const itreesug =[
    {
        IPM: 'SNAKE PLANT , ARECA PALM'
    
    }
    ,{
        IPM: 'ARECA PALM, SPIDER PLANT'
    }
    ,{
        IPM: 'PEACE LILY , ALOE VERA'
    }



    ]



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
document.getElementById('itree').innerHTML =   itreesug[Math.floor(Math.random() * 3)].IPM


if (document.getElementById('prime').innerHTML.includes(' 2') ) {
    document.getElementById('description').innerHTML =  "The particulate matter levels are slightly above normal - 4X the advised levels. though not a source of instant worry, plantation of above mentioned trees can help"
    document.getElementById('otree').innerHTML =  treessug[0].PM2

} 
if (document.getElementById('prime').innerHTML.includes(' 1')) {
    document.getElementById('description').innerHTML =  "The particulate matter levels in your area are very low. Inspite of the varying air quality index, which is influenced by various factors, you can be confident of the long-term health of the air around"
    document.getElementById('otree').innerHTML =  treessug[0].PM1
    document.getElementById('giffy').style.display = 'none'
     
} 
if (document.getElementById('prime').innerHTML.includes(' 3')) {
    document.getElementById('otree').innerHTML =   treessug[0].PM3
    document.getElementById('description').innerHTML =  "The particulate matter levels in the air are of mild concern - 6X the advised levels. Ensure you take active steps to reduce its levels"

} 

if (document.getElementById('prime').innerHTML.includes(' 4')) {
    document.getElementById('description').innerHTML =  "The particulate matter levels is to be concerned about. It is 8X the advised levels. Take necessary action"
    document.getElementById('otree').innerHTML = treessug[0].PM4
     
} 

if (document.getElementById('prime').innerHTML.includes(' 5')) {
    document.getElementById('description').innerHTML =  "The particulate matter levels are quite dangerous. It is almost 9X more than advised levels. Attention needed"
    document.getElementById('otree').innerHTML =  treessug[0].PM5
     
} 

if (document.getElementById('prime').innerHTML.includes(' 6')) {
    document.getElementById('description').innerHTML =  "The particulate matter levels are 12X advised levels. You might start experiencing long term effects. Immediate action advised."
    document.getElementById('otree').innerHTML =  treessug[0].PM6
    
     
} 
if (document.getElementById('prime').innerHTML.includes(' 7')) {
    document.getElementById('description').innerHTML =  "The particulate matter levels in the area of very high concern - 14X the advised levels. If you notice this trend to continue for a long time, it is advised to shift to a different locality"
    document.getElementById('otree').innerHTML =  treessug[0].PM7
    
     
} 
if (document.getElementById('prime').innerHTML.includes(' 8')) {
    document.getElementById('description').innerHTML =  "The particulate matter levels in the area of very high concern - 16X the advised levels.If you notice this trend to continue for a long time, it is advised to shift to a different locality"

    document.getElementById('otree').innerHTML =  treessug[0].PM8
    
     
} 
if (document.getElementById('prime').innerHTML.includes(' 9')) {
    document.getElementById('description').innerHTML =  "The particulate matter levels in the area are almost 20X the advised levels. Take very high precaution if it is a temporary condition. If not please escalate this concern as it can be fatal"
    document.getElementById('otree').innerHTML =  treessug[0].PM9
    
     
} 

setTimeout(treer , 800 )























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


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }



  function on() {
    document.getElementById("overlay").style.display = "block";
    darth =  document.getElementById("text").innerHTML
    var boba = parseInt(document.getElementById("aqi").innerHTML)
if (boba < 50) {
    document.getElementById("text").innerHTML = 'You are in a safe place as ideally the air quality index should be below 50'
}
if (boba > 50 && boba<150) {
    fett = parseInt(boba/40)
    if (fett=1){
        jar = fett +1
        document.getElementById("text").innerHTML = 'Ideally the air quality index should be below 50. Your area has an index which is almost ' + jar + ' times the ideal quality. However in urban areas it can peak upto 150. So if the air quality index of your region fluctuates around this levels you need not be immediately worried but should take steps to better the air quality'

    }

    else{
        document.getElementById("text").innerHTML = 'Ideally the air quality index should be below 50. Your area has an index which is almost ' + fett + ' times the ideal quality. However in urban areas it can peak upto 150. So if the air quality index of your region fluctuates around this levels you need not be immediately worried but should take steps to better the air quality'

    }
    }
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }





  

  function ont() {
    document.getElementById("overlayt").style.display = "block";

    
if (document.getElementById('prime').innerHTML.includes(' 2') ) {
 document.getElementById('textt').innerHTML = "Both  Banyan Peepal produce a significant quantity of oxygen during the day, making it essential components of urban landscapes for reducing pollution and fostering healthier ecosystems. They are excellent purifiers of air"
} 
if (document.getElementById('prime').innerHTML.includes(' 1')) {
    document.getElementById('textt').innerHTML = "Breadfruit/Panapen trees provide food security, and contribute to diversified regenerative agriculture and agroforestry, improved soil conditions and watersheds, and valuable environmental benefits including reduction of CO2 and Partculate Matter." + "<br> </br>" + "Jackfruit is drought-resistant crop, ideal in the fight for soil and water conservation, while also trapping particulates in air"

     
} 
if (document.getElementById('prime').innerHTML.includes(' 3')) {
    document.getElementById('textt').innerHTML = "Evidence shows that olive growing increases atmospheric carbon dioxide fixation in the soil, while Tamarind trees also improve soil fertility, prevent soil erosion, and provide shade, which benefits other crops and wildlife, apart from purifying air"
} 

if (document.getElementById('prime').innerHTML.includes(' 4')) {
    document.getElementById('textt').innerHTML = "Figs are some of the most environmentally-conscious fruits out there while the the needles on pine trees are especially important because they help to clean the air by absorbing pollutants such as ozone and nitrogen oxide."
     
} 

if (document.getElementById('prime').innerHTML.includes(' 5')) {
  
    document.getElementById('textt').innerHTML =   "Ebony helps in carbon sequestration and carbon storage in the tree and its rooting system while panama tree also plays a role in increasing water infiltration and slowing the movement of water"
} 

if (document.getElementById('prime').innerHTML.includes(' 6')) {
    document.getElementById('textt').innerHTML =   "Slash Pine trees are also highly adaptable, able to grow in a variety of soils and climates, making them a great choice for reforestation and ecological restoration projects.Indian tamarind shares common benefits while has much more vigour."
    
     
} 
    
if (document.getElementById('prime').innerHTML.includes(' 7')) {
    document.getElementById('textt').innerHTML =   "Mahogany trees release the sulphur compound that can reduce the atmospheric warming led by greenhouse gases, while slash Pine trees are also highly adaptable, able to grow in a variety of soils and climates, making them a great choice for reforestation and ecological restoration projects"
     
} 
  }
  
  function offt() {
    document.getElementById("overlayt").style.display = "none";


  }