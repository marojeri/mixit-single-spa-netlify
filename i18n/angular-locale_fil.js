"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],ERANAMES:["BC","AD"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],SHORTDAY:["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],SHORTMONTH:["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],STANDALONEMONTH:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",short:"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₱",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"fil",localeID:"fil",pluralCat:function(e,r){var o=0|e,M=function(e,r){var o=r;void 0===o&&(o=Math.min(function(e){var r=(e+="").indexOf(".");return-1==r?0:e.length-r-1}(e),3));var M=Math.pow(10,o);return{v:o,f:(e*M|0)%M}}(e,r);return 0==M.v&&(1==o||2==o||3==o)||0==M.v&&o%10!=4&&o%10!=6&&o%10!=9||0!=M.v&&M.f%10!=4&&M.f%10!=6&&M.f%10!=9?"one":"other"}})}]);