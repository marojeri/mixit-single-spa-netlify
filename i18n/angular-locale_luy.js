"use strict";angular.module("ngLocale",[],["$provide",function(a){a.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["Jumapiri","Jumatatu","Jumanne","Jumatano","Murwa wa Kanne","Murwa wa Katano","Jumamosi"],ERANAMES:["Imberi ya Kuuza Kwa","Muhiga Kuvita Kuuza"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"],SHORTDAY:["J2","J3","J4","J5","Al","Ij","J1"],SHORTMONTH:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ago","Sep","Okt","Nov","Des"],STANDALONEMONTH:["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤- ",negSuf:"",posPre:"¤",posSuf:""}]},id:"luy",localeID:"luy",pluralCat:function(a,e){var i=0|a,u=function(a,e){var i=e;void 0===i&&(i=Math.min(function(a){var e=(a+="").indexOf(".");return-1==e?0:a.length-e-1}(a),3));var u=Math.pow(10,i);return{v:i,f:(a*u|0)%u}}(a,e);return 1==i&&0==u.v?"one":"other"}})}]);