"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Uhr vörmiddaachs","Uhr nommendaachs"],DAY:["Sunndaach","Mohndaach","Dinnsdaach","Metwoch","Dunnersdaach","Friidaach","Samsdaach"],ERANAMES:["vür Krestos","noh Krestos"],ERAS:["v. Chr.","n. Chr."],FIRSTDAYOFWEEK:0,MONTH:["Jannewa","Fäbrowa","Määz","Aprell","Mai","Juuni","Juuli","Oujoß","Septämber","Oktohber","Novämber","Dezämber"],SHORTDAY:["Su.","Mo.","Di.","Me.","Du.","Fr.","Sa."],SHORTMONTH:["Jan","Fäb","Mäz","Apr","Mai","Jun","Jul","Ouj","Säp","Okt","Nov","Dez"],STANDALONEMONTH:["Jannewa","Fäbrowa","Määz","Aprell","Mai","Juuni","Juuli","Oujoß","Septämber","Oktohber","Novämber","Dezämber"],WEEKENDRANGE:[5,6],fullDate:"EEEE, 'dä' d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM. y HH:mm:ss",mediumDate:"d. MMM. y",mediumTime:"HH:mm:ss",short:"d. M. y HH:mm",shortDate:"d. M. y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ksh-de",localeID:"ksh_DE",pluralCat:function(e,a){var r=0|e,n=function(e,a){var r=a;void 0===r&&(r=Math.min(function(e){var a=(e+="").indexOf(".");return-1==a?0:e.length-a-1}(e),3));var n=Math.pow(10,r);return{v:r,f:(e*n|0)%n}}(e,a);return 1==r&&0==n.v?"one":"other"}})}]);