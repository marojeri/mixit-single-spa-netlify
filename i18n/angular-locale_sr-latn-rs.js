"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["pre podne","po podne"],DAY:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],ERANAMES:["pre nove ere","nove ere"],ERAS:["p. n. e.","n. e."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],SHORTDAY:["ned","pon","uto","sre","čet","pet","sub"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],STANDALONEMONTH:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd.MM.y. HH:mm:ss",mediumDate:"dd.MM.y.",mediumTime:"HH:mm:ss",short:"d.M.yy. HH:mm",shortDate:"d.M.yy.",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sr-latn-rs",localeID:"sr_Latn_RS",pluralCat:function(e,a){var r=0|e,n=function(e,a){var r=a;void 0===r&&(r=Math.min(function(e){var a=(e+="").indexOf(".");return-1==a?0:e.length-a-1}(e),3));var n=Math.pow(10,r);return{v:r,f:(e*n|0)%n}}(e,a);return 0==n.v&&r%10==1&&r%100!=11||n.f%10==1&&n.f%100!=11?"one":0==n.v&&r%10>=2&&r%10<=4&&(r%100<12||r%100>14)||n.f%10>=2&&n.f%10<=4&&(n.f%100<12||n.f%100>14)?"few":"other"}})}]);