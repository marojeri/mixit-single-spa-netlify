"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["पूर्वाह्न","अपराह्न"],DAY:["आइतबार","सोमबार","मङ्गलबार","बुधबार","बिहिबार","शुक्रबार","शनिबार"],ERANAMES:["ईसा पूर्व","सन्"],ERAS:["ईसा पूर्व","सन्"],FIRSTDAYOFWEEK:6,MONTH:["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मई","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"],SHORTDAY:["आइत","सोम","मङ्गल","बुध","बिहि","शुक्र","शनि"],SHORTMONTH:["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"],STANDALONEMONTH:["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जुन","जुलाई","अगस्ट","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss",short:"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Rs",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"ne",localeID:"ne",pluralCat:function(e,M){return 1==e?"one":"other"}})}]);