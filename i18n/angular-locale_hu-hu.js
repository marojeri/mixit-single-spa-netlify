"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["de.","du."],DAY:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],ERANAMES:["időszámításunk előtt","időszámításunk szerint"],ERAS:["i. e.","i. sz."],FIRSTDAYOFWEEK:0,MONTH:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],SHORTDAY:["V","H","K","Sze","Cs","P","Szo"],SHORTMONTH:["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],STANDALONEMONTH:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],WEEKENDRANGE:[5,6],fullDate:"y. MMMM d., EEEE",longDate:"y. MMMM d.",medium:"y. MMM d. H:mm:ss",mediumDate:"y. MMM d.",mediumTime:"H:mm:ss",short:"y. MM. dd. H:mm",shortDate:"y. MM. dd.",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Ft",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"hu-hu",localeID:"hu_HU",pluralCat:function(e,r){return 1==e?"one":"other"}})}]);