"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["OD","OT"],DAY:["Jumapil","Wuok Tich","Tich Ariyo","Tich Adek","Tich Ang’wen","Tich Abich","Ngeso"],ERANAMES:["Kapok Kristo obiro","Ka Kristo osebiro"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["Dwe mar Achiel","Dwe mar Ariyo","Dwe mar Adek","Dwe mar Ang’wen","Dwe mar Abich","Dwe mar Auchiel","Dwe mar Abiriyo","Dwe mar Aboro","Dwe mar Ochiko","Dwe mar Apar","Dwe mar gi achiel","Dwe mar Apar gi ariyo"],SHORTDAY:["JMP","WUT","TAR","TAD","TAN","TAB","NGS"],SHORTMONTH:["DAC","DAR","DAD","DAN","DAH","DAU","DAO","DAB","DOC","DAP","DGI","DAG"],STANDALONEMONTH:["Dwe mar Achiel","Dwe mar Ariyo","Dwe mar Adek","Dwe mar Ang’wen","Dwe mar Abich","Dwe mar Auchiel","Dwe mar Abiriyo","Dwe mar Aboro","Dwe mar Ochiko","Dwe mar Apar","Dwe mar gi achiel","Dwe mar Apar gi ariyo"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss",short:"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"luo",localeID:"luo",pluralCat:function(e,r){var a=0|e,i=function(e,r){var a=r;void 0===a&&(a=Math.min(function(e){var r=(e+="").indexOf(".");return-1==r?0:e.length-r-1}(e),3));var i=Math.pow(10,a);return{v:a,f:(e*i|0)%i}}(e,r);return 1==a&&0==i.v?"one":"other"}})}]);