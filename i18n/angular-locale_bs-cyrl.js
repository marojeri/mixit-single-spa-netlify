"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["пре подне","поподне"],DAY:["недеља","понедељак","уторак","сриједа","четвртак","петак","субота"],ERANAMES:["Пре нове ере","Нове ере"],ERAS:["п. н. е.","н. е."],FIRSTDAYOFWEEK:0,MONTH:["јануар","фебруар","март","април","мај","јуни","јули","август","септембар","октобар","новембар","децембар"],SHORTDAY:["нед","пон","уто","сри","чет","пет","суб"],SHORTMONTH:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],STANDALONEMONTH:["јануар","фебруар","март","април","мај","јуни","јули","август","септембар","октобар","новембар","децембар"],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd.MM.y. HH:mm:ss",mediumDate:"dd.MM.y.",mediumTime:"HH:mm:ss",short:"d.M.yy. HH:mm",shortDate:"d.M.yy.",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"KM",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"bs-cyrl",localeID:"bs_Cyrl",pluralCat:function(e,M){var n=0|e,r=function(e,M){var n=M;void 0===n&&(n=Math.min(function(e){var M=(e+="").indexOf(".");return-1==M?0:e.length-M-1}(e),3));var r=Math.pow(10,n);return{v:n,f:(e*r|0)%r}}(e,M);return 0==r.v&&n%10==1&&n%100!=11||r.f%10==1&&r.f%100!=11?"one":0==r.v&&n%10>=2&&n%10<=4&&(n%100<12||n%100>14)||r.f%10>=2&&r.f%10<=4&&(r.f%100<12||r.f%100>14)?"few":"other"}})}]);