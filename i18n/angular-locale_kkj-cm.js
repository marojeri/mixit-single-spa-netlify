"use strict";angular.module("ngLocale",[],["$provide",function(a){a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["sɔndi","lundi","mardi","mɛrkɛrɛdi","yedi","vaŋdɛrɛdi","mɔnɔ sɔndi"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["pamba","wanja","mbiyɔ mɛndoŋgɔ","Nyɔlɔmbɔŋgɔ","Mɔnɔ ŋgbanja","Nyaŋgwɛ ŋgbanja","kuŋgwɛ","fɛ","njapi","nyukul","11","ɓulɓusɛ"],SHORTDAY:["sɔndi","lundi","mardi","mɛrkɛrɛdi","yedi","vaŋdɛrɛdi","mɔnɔ sɔndi"],SHORTMONTH:["pamba","wanja","mbiyɔ mɛndoŋgɔ","Nyɔlɔmbɔŋgɔ","Mɔnɔ ŋgbanja","Nyaŋgwɛ ŋgbanja","kuŋgwɛ","fɛ","njapi","nyukul","11","ɓulɓusɛ"],STANDALONEMONTH:["pamba","wanja","mbiyɔ mɛndoŋgɔ","Nyɔlɔmbɔŋgɔ","Mɔnɔ ŋgbanja","Nyaŋgwɛ ŋgbanja","kuŋgwɛ","fɛ","njapi","nyukul","11","ɓulɓusɛ"],WEEKENDRANGE:[5,6],fullDate:"EEEE dd MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"dd/MM y HH:mm",shortDate:"dd/MM y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"kkj-cm",localeID:"kkj_CM",pluralCat:function(a,n){var i=0|a,m=function(a,n){var i=n;void 0===i&&(i=Math.min(function(a){var n=(a+="").indexOf(".");return-1==n?0:a.length-n-1}(a),3));var m=Math.pow(10,i);return{v:i,f:(a*m|0)%m}}(a,n);return 1==i&&0==m.v?"one":"other"}})}]);