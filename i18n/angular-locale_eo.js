"use strict";angular.module("ngLocale",[],["$provide",function(o){o.value("$locale",{DATETIME_FORMATS:{AMPMS:["atm","ptm"],DAY:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"],ERANAMES:["aK","pK"],ERAS:["aK","pK"],FIRSTDAYOFWEEK:0,MONTH:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"],SHORTDAY:["di","lu","ma","me","ĵa","ve","sa"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],STANDALONEMONTH:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d-'a' 'de' MMMM y",longDate:"y-MMMM-dd",medium:"y-MMM-dd HH:mm:ss",mediumDate:"y-MMM-dd",mediumTime:"HH:mm:ss",short:"yy-MM-dd HH:mm",shortDate:"yy-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"eo",localeID:"eo",pluralCat:function(o,e){var a=0|o,r=function(o,e){var a=e;void 0===a&&(a=Math.min(function(o){var e=(o+="").indexOf(".");return-1==e?0:o.length-e-1}(o),3));var r=Math.pow(10,a);return{v:a,f:(o*r|0)%r}}(o,e);return 1==a&&0==r.v?"one":"other"}})}]);