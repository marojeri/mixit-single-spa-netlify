"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],ERANAMES:["avanti Cristo","dopo Cristo"],ERAS:["a.C.","d.C."],FIRSTDAYOFWEEK:0,MONTH:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],SHORTDAY:["dom","lun","mar","mer","gio","ven","sab"],SHORTMONTH:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],STANDALONEMONTH:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CHF",DECIMAL_SEP:".",GROUP_SEP:"’",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"it-ch",localeID:"it_CH",pluralCat:function(e,o){var a=0|e,r=function(e,o){var a=o;void 0===a&&(a=Math.min(function(e){var o=(e+="").indexOf(".");return-1==o?0:e.length-o-1}(e),3));var r=Math.pow(10,a);return{v:a,f:(e*r|0)%r}}(e,o);return 1==a&&0==r.v?"one":"other"}})}]);