"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["غ.م.","غ.و."],DAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],ERANAMES:["له میلاد څخه وړاندې","له میلاد څخه وروسته"],ERAS:["له میلاد وړاندې","م."],FIRSTDAYOFWEEK:5,MONTH:["جنوري","فبروري","مارچ","اپریل","مۍ","جون","جولای","اګست","سپتمبر","اکتوبر","نومبر","دسمبر"],SHORTDAY:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],SHORTMONTH:["جنوري","فبروري","مارچ","اپریل","مۍ","جون","جولای","اګست","سپتمبر","اکتوبر","نومبر","دسمبر"],STANDALONEMONTH:["جنوري","فبروري","مارچ","اپریل","مۍ","جون","جولای","اګست","سپتمبر","اکتوبر","نومبر","دسمبر"],WEEKENDRANGE:[3,4],fullDate:"EEEE د y د MMMM d",longDate:"د y د MMMM d",medium:"y MMM d H:mm:ss",mediumDate:"y MMM d",mediumTime:"H:mm:ss",short:"y/M/d H:mm",shortDate:"y/M/d",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Af.",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ps-af",localeID:"ps_AF",pluralCat:function(e,M){var n=0|e,r=function(e,M){var n=M;void 0===n&&(n=Math.min(function(e){var M=(e+="").indexOf(".");return-1==M?0:e.length-M-1}(e),3));var r=Math.pow(10,n);return{v:n,f:(e*r|0)%r}}(e,M);return 1==n&&0==r.v?"one":"other"}})}]);