"use strict";angular.module("ngLocale",[],["$provide",function(n){n.value("$locale",{DATETIME_FORMATS:{AMPMS:["maná","kugú"],DAY:["sɔ́ndɔ","mɔ́ndɔ","sɔ́ndɔ mafú mába","sɔ́ndɔ mafú málal","sɔ́ndɔ mafú mána","mabágá má sukul","sásadi"],ERANAMES:["Bó Lahlɛ̄","Pfiɛ Burī"],ERAS:["BL","PB"],FIRSTDAYOFWEEK:0,MONTH:["ngwɛn matáhra","ngwɛn ńmba","ngwɛn ńlal","ngwɛn ńna","ngwɛn ńtan","ngwɛn ńtuó","ngwɛn hɛmbuɛrí","ngwɛn lɔmbi","ngwɛn rɛbvuâ","ngwɛn wum","ngwɛn wum navǔr","krísimin"],SHORTDAY:["sɔ́n","mɔ́n","smb","sml","smn","mbs","sas"],SHORTMONTH:["ng1","ng2","ng3","ng4","ng5","ng6","ng7","ng8","ng9","ng10","ng11","kris"],STANDALONEMONTH:["ngwɛn matáhra","ngwɛn ńmba","ngwɛn ńlal","ngwɛn ńna","ngwɛn ńtan","ngwɛn ńtuó","ngwɛn hɛmbuɛrí","ngwɛn lɔmbi","ngwɛn rɛbvuâ","ngwɛn wum","ngwɛn wum navǔr","krísimin"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"nmg-cm",localeID:"nmg_CM",pluralCat:function(n,m){var a=0|n,g=function(n,m){var a=m;void 0===a&&(a=Math.min(function(n){var m=(n+="").indexOf(".");return-1==m?0:n.length-m-1}(n),3));var g=Math.pow(10,a);return{v:a,f:(n*g|0)%g}}(n,m);return 1==a&&0==g.v?"one":"other"}})}]);