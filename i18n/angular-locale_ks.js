"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["اَتھوار","ژٔنٛدرٕروار","بوٚموار","بودوار","برٛٮ۪سوار","جُمہ","بٹوار"],ERANAMES:["قبٕل مسیٖح","عیٖسوی سنہٕ"],ERAS:["بی سی","اے ڈی"],FIRSTDAYOFWEEK:6,MONTH:["جنؤری","فرؤری","مارٕچ","اپریل","میٔ","جوٗن","جوٗلایی","اگست","ستمبر","اکتوٗبر","نومبر","دسمبر"],SHORTDAY:["آتھوار","ژٔنٛدٕروار","بوٚموار","بودوار","برٛٮ۪سوار","جُمہ","بٹوار"],SHORTMONTH:["جنؤری","فرؤری","مارٕچ","اپریل","میٔ","جوٗن","جوٗلایی","اگست","ستمبر","اکتوٗبر","نومبر","دسمبر"],STANDALONEMONTH:["جنؤری","فرؤری","مارٕچ","اپریل","میٔ","جوٗن","جوٗلایی","اگست","ستمبر","اکتوٗبر","نومبر","دسمبر"],WEEKENDRANGE:[6,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",short:"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"ks",localeID:"ks",pluralCat:function(e,M){var a=0|e,n=function(e,M){var a=M;void 0===a&&(a=Math.min(function(e){var M=(e+="").indexOf(".");return-1==M?0:e.length-M-1}(e),3));var n=Math.pow(10,a);return{v:a,f:(e*n|0)%n}}(e,M);return 1==a&&0==n.v?"one":"other"}})}]);