"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["چۈشتىن بۇرۇن","چۈشتىن كېيىن"],DAY:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],ERANAMES:["مىلادىيەدىن بۇرۇن","مىلادىيە"],ERAS:["BCE","مىلادىيە"],FIRSTDAYOFWEEK:6,MONTH:["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","نويابىر","دېكابىر"],SHORTDAY:["يە","دۈ","سە","چا","پە","جۈ","شە"],SHORTMONTH:["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","نويابىر","دېكابىر"],STANDALONEMONTH:["يانۋار","فېۋرال","مارت","ئاپرېل","ماي","ئىيۇن","ئىيۇل","ئاۋغۇست","سېنتەبىر","ئۆكتەبىر","نويابىر","دېكابىر"],WEEKENDRANGE:[5,6],fullDate:"y d-MMMM، EEEE",longDate:"d-MMMM، y",medium:"d-MMM، y h:mm:ss a",mediumDate:"d-MMM، y",mediumTime:"h:mm:ss a",short:"y-MM-dd h:mm a",shortDate:"y-MM-dd",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"¥",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"ug",localeID:"ug",pluralCat:function(e,M){var a=0|e,n=function(e,M){var a=M;void 0===a&&(a=Math.min(function(e){var M=(e+="").indexOf(".");return-1==M?0:e.length-M-1}(e),3));var n=Math.pow(10,a);return{v:a,f:(e*n|0)%n}}(e,M);return 1==a&&0==n.v?"one":"other"}})}]);