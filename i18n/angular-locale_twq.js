"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Subbaahi","Zaarikay b"],DAY:["Alhadi","Atinni","Atalaata","Alarba","Alhamiisa","Alzuma","Asibti"],ERANAMES:["Isaa jine","Isaa zamanoo"],ERAS:["IJ","IZ"],FIRSTDAYOFWEEK:0,MONTH:["Žanwiye","Feewiriye","Marsi","Awiril","Me","Žuweŋ","Žuyye","Ut","Sektanbur","Oktoobur","Noowanbur","Deesanbur"],SHORTDAY:["Alh","Ati","Ata","Ala","Alm","Alz","Asi"],SHORTMONTH:["Žan","Fee","Mar","Awi","Me","Žuw","Žuy","Ut","Sek","Okt","Noo","Dee"],STANDALONEMONTH:["Žanwiye","Feewiriye","Marsi","Awiril","Me","Žuweŋ","Žuyye","Ut","Sektanbur","Oktoobur","Noowanbur","Deesanbur"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:".",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"twq",localeID:"twq",pluralCat:function(e,a){var i=0|e,r=function(e,a){var i=a;void 0===i&&(i=Math.min(function(e){var a=(e+="").indexOf(".");return-1==a?0:e.length-a-1}(e),3));var r=Math.pow(10,i);return{v:i,f:(e*r|0)%r}}(e,a);return 1==i&&0==r.v?"one":"other"}})}]);