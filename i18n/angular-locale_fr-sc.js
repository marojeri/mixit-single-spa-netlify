"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],ERANAMES:["avant Jésus-Christ","après Jésus-Christ"],ERAS:["av. J.-C.","ap. J.-C."],FIRSTDAYOFWEEK:0,MONTH:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],SHORTDAY:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],SHORTMONTH:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],STANDALONEMONTH:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"SCR",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"fr-sc",localeID:"fr_SC",pluralCat:function(e,r){var a=0|e;return 0==a||1==a?"one":"other"}})}]);