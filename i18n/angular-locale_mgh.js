"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["wichishu","mchochil’l"],DAY:["Sabato","Jumatatu","Jumanne","Jumatano","Arahamisi","Ijumaa","Jumamosi"],ERANAMES:["Hinapiya yesu","Yopia yesu"],ERAS:["HY","YY"],FIRSTDAYOFWEEK:6,MONTH:["Mweri wo kwanza","Mweri wo unayeli","Mweri wo uneraru","Mweri wo unecheshe","Mweri wo unethanu","Mweri wo thanu na mocha","Mweri wo saba","Mweri wo nane","Mweri wo tisa","Mweri wo kumi","Mweri wo kumi na moja","Mweri wo kumi na yel’li"],SHORTDAY:["Sab","Jtt","Jnn","Jtn","Ara","Iju","Jmo"],SHORTMONTH:["Kwa","Una","Rar","Che","Tha","Moc","Sab","Nan","Tis","Kum","Moj","Yel"],STANDALONEMONTH:["Mweri wo kwanza","Mweri wo unayeli","Mweri wo uneraru","Mweri wo unecheshe","Mweri wo unethanu","Mweri wo thanu na mocha","Mweri wo saba","Mweri wo nane","Mweri wo tisa","Mweri wo kumi","Mweri wo kumi na moja","Mweri wo kumi na yel’li"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MTn",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"mgh",localeID:"mgh",pluralCat:function(e,a){var i=0|e,n=function(e,a){var i=a;void 0===i&&(i=Math.min(function(e){var a=(e+="").indexOf(".");return-1==a?0:e.length-a-1}(e),3));var n=Math.pow(10,i);return{v:i,f:(e*n|0)%n}}(e,a);return 1==i&&0==n.v?"one":"other"}})}]);