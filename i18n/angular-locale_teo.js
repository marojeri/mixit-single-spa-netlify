"use strict";angular.module("ngLocale",[],["$provide",function(a){a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Taparachu","Ebongi"],DAY:["Nakaejuma","Nakaebarasa","Nakaare","Nakauni","Nakaung’on","Nakakany","Nakasabiti"],ERANAMES:["Kabla ya Christo","Baada ya Christo"],ERAS:["KK","BK"],FIRSTDAYOFWEEK:0,MONTH:["Orara","Omuk","Okwamg’","Odung’el","Omaruk","Omodok’king’ol","Ojola","Opedel","Osokosokoma","Otibar","Olabor","Opoo"],SHORTDAY:["Jum","Bar","Aar","Uni","Ung","Kan","Sab"],SHORTMONTH:["Rar","Muk","Kwa","Dun","Mar","Mod","Jol","Ped","Sok","Tib","Lab","Poo"],STANDALONEMONTH:["Orara","Omuk","Okwamg’","Odung’el","Omaruk","Omodok’king’ol","Ojola","Opedel","Osokosokoma","Otibar","Olabor","Opoo"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"UGX",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"teo",localeID:"teo",pluralCat:function(a,o){var e=0|a,r=function(a,o){var e=o;void 0===e&&(e=Math.min(function(a){var o=(a+="").indexOf(".");return-1==o?0:a.length-o-1}(a),3));var r=Math.pow(10,e);return{v:e,f:(a*r|0)%r}}(a,o);return 1==e&&0==r.v?"one":"other"}})}]);