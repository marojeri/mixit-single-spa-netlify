"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],ERANAMES:["pred Kristom","po Kristovi"],ERAS:["pred Kr.","po Kr."],FIRSTDAYOFWEEK:0,MONTH:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],SHORTDAY:["ne","po","ut","st","št","pi","so"],SHORTMONTH:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],STANDALONEMONTH:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. M. y H:mm:ss",mediumDate:"d. M. y",mediumTime:"H:mm:ss",short:"d. M. y H:mm",shortDate:"d. M. y",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sk-sk",localeID:"sk_SK",pluralCat:function(e,r){var a=0|e,n=function(e,r){var a=r;void 0===a&&(a=Math.min(function(e){var r=(e+="").indexOf(".");return-1==r?0:e.length-r-1}(e),3));var n=Math.pow(10,a);return{v:a,f:(e*n|0)%n}}(e,r);return 1==a&&0==n.v?"one":a>=2&&a<=4&&0==n.v?"few":0!=n.v?"many":"other"}})}]);