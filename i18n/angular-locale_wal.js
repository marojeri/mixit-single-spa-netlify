"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ማለዶ","ቃማ"],DAY:["ወጋ","ሳይኖ","ማቆሳኛ","አሩዋ","ሃሙሳ","አርባ","ቄራ"],MONTH:["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕረል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክተውበር","ኖቬምበር","ዲሴምበር"],SHORTDAY:["ወጋ","ሳይኖ","ማቆሳኛ","አሩዋ","ሃሙሳ","አርባ","ቄራ"],SHORTMONTH:["ጃንዩ","ፌብሩ","ማርች","ኤፕረ","ሜይ","ጁን","ጁላይ","ኦገስ","ሴፕቴ","ኦክተ","ኖቬም","ዲሴም"],fullDate:"EEEE፥ dd MMMM ጋላሳ y G",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a",short:"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Birr",DECIMAL_SEP:".",GROUP_SEP:"’",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"wal",pluralCat:function(e,M){var a=0|e,n=function(e,M){var a=M;void 0===a&&(a=Math.min(function(e){var M=(e+="").indexOf(".");return-1==M?0:e.length-M-1}(e),3));var n=Math.pow(10,a);return{v:a,f:(e*n|0)%n}}(e,M);return 1==a&&0==n.v?"one":"other"}})}]);