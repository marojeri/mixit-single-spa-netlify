"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],ERANAMES:["voor Christus","na Christus"],ERAS:["v.Chr.","n.Chr."],FIRSTDAYOFWEEK:0,MONTH:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],SHORTDAY:["zo","ma","di","wo","do","vr","za"],SHORTMONTH:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],STANDALONEMONTH:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"d/MM/yy HH:mm",shortDate:"d/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"nl-be",localeID:"nl_BE",pluralCat:function(e,a){var r=0|e,n=function(e,a){var r=a;void 0===r&&(r=Math.min(function(e){var a=(e+="").indexOf(".");return-1==a?0:e.length-a-1}(e),3));var n=Math.pow(10,r);return{v:r,f:(e*n|0)%n}}(e,a);return 1==r&&0==n.v?"one":"other"}})}]);