"use strict";angular.module("ngLocale",[],["$provide",function(e){e.value("$locale",{DATETIME_FORMATS:{AMPMS:["e paradites","e pasdites"],DAY:["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],ERANAMES:["para Krishtit","mbas Krishtit"],ERAS:["p.K.","mb.K."],FIRSTDAYOFWEEK:0,MONTH:["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor"],SHORTDAY:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],SHORTMONTH:["jan","shk","mar","pri","maj","qer","kor","gsh","sht","tet","nën","dhj"],STANDALONEMONTH:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a",short:"d.M.yy h:mm a",shortDate:"d.M.yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Lek",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"sq-al",localeID:"sq_AL",pluralCat:function(e,r){return 1==e?"one":"other"}})}]);