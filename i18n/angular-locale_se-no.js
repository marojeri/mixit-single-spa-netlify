"use strict";angular.module("ngLocale",[],["$provide",function(n){n.value("$locale",{DATETIME_FORMATS:{AMPMS:["iđitbeaivet","eahketbeaivet"],DAY:["sotnabeaivi","vuossárga","maŋŋebárga","gaskavahkku","duorasdat","bearjadat","lávvardat"],ERANAMES:["ovdal Kristtusa","maŋŋel Kristtusa"],ERAS:["o.Kr.","m.Kr."],FIRSTDAYOFWEEK:0,MONTH:["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu"],SHORTDAY:["sotn","vuos","maŋ","gask","duor","bear","láv"],SHORTMONTH:["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov"],STANDALONEMONTH:["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss",short:"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"se-no",localeID:"se_NO",pluralCat:function(n,a){var u=0|n,e=function(n,a){var u=a;void 0===u&&(u=Math.min(function(n){var a=(n+="").indexOf(".");return-1==a?0:n.length-a-1}(n),3));var e=Math.pow(10,u);return{v:u,f:(n*e|0)%e}}(n,a);return 1==u&&0==e.v?"one":"other"}})}]);