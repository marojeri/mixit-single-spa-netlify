"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["قبل‌ازظهر","بعدازظهر"],DAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],ERANAMES:["قبل از میلاد","میلادی"],ERAS:["ق.م.","م."],FIRSTDAYOFWEEK:5,MONTH:["ژانویهٔ","فوریهٔ","مارس","آوریل","مهٔ","ژوئن","ژوئیهٔ","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],SHORTDAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],SHORTMONTH:["ژانویهٔ","فوریهٔ","مارس","آوریل","مهٔ","ژوئن","ژوئیهٔ","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],STANDALONEMONTH:["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],WEEKENDRANGE:[4,4],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y H:mm:ss",mediumDate:"d MMM y",mediumTime:"H:mm:ss",short:"y/M/d H:mm",shortDate:"y/M/d",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Rial",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"؜-",negSuf:" ؜¤",posPre:"",posSuf:" ؜¤"}]},id:"fa-ir",localeID:"fa_IR",pluralCat:function(e,M){return 0==(0|e)||1==e?"one":"other"}})}]);