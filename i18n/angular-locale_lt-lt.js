"use strict";angular.module("ngLocale",[],["$provide",function(i){i.value("$locale",{DATETIME_FORMATS:{AMPMS:["priešpiet","popiet"],DAY:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],ERANAMES:["prieš Kristų","po Kristaus"],ERAS:["pr. Kr.","po Kr."],FIRSTDAYOFWEEK:0,MONTH:["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio"],SHORTDAY:["sk","pr","an","tr","kt","pn","št"],SHORTMONTH:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],STANDALONEMONTH:["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"],WEEKENDRANGE:[5,6],fullDate:"y 'm'. MMMM d 'd'., EEEE",longDate:"y 'm'. MMMM d 'd'.",medium:"y-MM-dd HH:mm:ss",mediumDate:"y-MM-dd",mediumTime:"HH:mm:ss",short:"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"lt-lt",localeID:"lt_LT",pluralCat:function(i,e){var a=function(i,e){var a=e;void 0===a&&(a=Math.min(function(i){var e=(i+="").indexOf(".");return-1==e?0:i.length-e-1}(i),3));var r=Math.pow(10,a);return{v:a,f:(i*r|0)%r}}(i,e);return i%10==1&&(i%100<11||i%100>19)?"one":i%10>=2&&i%10<=9&&(i%100<11||i%100>19)?"few":0!=a.f?"many":"other"}})}]);