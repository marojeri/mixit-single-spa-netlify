"use strict";angular.module("ngLocale",[],["$provide",function(M){M.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["կիրակի","երկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"],ERANAMES:["Քրիստոսից առաջ","Քրիստոսից հետո"],ERAS:["մ.թ.ա.","մ.թ."],FIRSTDAYOFWEEK:0,MONTH:["հունվարի","փետրվարի","մարտի","ապրիլի","մայիսի","հունիսի","հուլիսի","օգոստոսի","սեպտեմբերի","հոկտեմբերի","նոյեմբերի","դեկտեմբերի"],SHORTDAY:["կիր","երկ","երք","չրք","հնգ","ուր","շբթ"],SHORTMONTH:["հնվ","փտվ","մրտ","ապր","մյս","հնս","հլս","օգս","սեպ","հոկ","նոյ","դեկ"],STANDALONEMONTH:["հունվար","փետրվար","մարտ","ապրիլ","մայիս","հունիս","հուլիս","օգոստոս","սեպտեմբեր","հոկտեմբեր","նոյեմբեր","դեկտեմբեր"],WEEKENDRANGE:[5,6],fullDate:"y թ. MMMM d, EEEE",longDate:"dd MMMM, y թ.",medium:"dd MMM, y թ. HH:mm:ss",mediumDate:"dd MMM, y թ.",mediumTime:"HH:mm:ss",short:"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Dram",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:0,minFrac:0,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"hy-am",localeID:"hy_AM",pluralCat:function(M,e){var m=0|M;return 0==m||1==m?"one":"other"}})}]);