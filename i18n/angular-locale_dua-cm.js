"use strict";angular.module("ngLocale",[],["$provide",function(i){i.value("$locale",{DATETIME_FORMATS:{AMPMS:["idiɓa","ebyámu"],DAY:["éti","mɔ́sú","kwasú","mukɔ́sú","ŋgisú","ɗónɛsú","esaɓasú"],ERANAMES:["ɓoso ɓwá yáɓe lá","mbúsa kwédi a Yés"],ERAS:["ɓ.Ys","mb.Ys"],FIRSTDAYOFWEEK:0,MONTH:["dimɔ́di","ŋgɔndɛ","sɔŋɛ","diɓáɓá","emiasele","esɔpɛsɔpɛ","madiɓɛ́díɓɛ́","diŋgindi","nyɛtɛki","mayésɛ́","tiníní","eláŋgɛ́"],SHORTDAY:["ét","mɔ́s","kwa","muk","ŋgi","ɗón","esa"],SHORTMONTH:["di","ŋgɔn","sɔŋ","diɓ","emi","esɔ","mad","diŋ","nyɛt","may","tin","elá"],STANDALONEMONTH:["dimɔ́di","ŋgɔndɛ","sɔŋɛ","diɓáɓá","emiasele","esɔpɛsɔpɛ","madiɓɛ́díɓɛ́","diŋgindi","nyɛtɛki","mayésɛ́","tiníní","eláŋgɛ́"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"dua-cm",localeID:"dua_CM",pluralCat:function(i,e){var m=0|i,n=function(i,e){var m=e;void 0===m&&(m=Math.min(function(i){var e=(i+="").indexOf(".");return-1==e?0:i.length-e-1}(i),3));var n=Math.pow(10,m);return{v:m,f:(i*n|0)%n}}(i,e);return 1==m&&0==n.v?"one":"other"}})}]);