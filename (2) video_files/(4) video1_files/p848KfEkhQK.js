;/*FB_PKG_DELIM*/

__d("WAWebMoment-en-gb",["WAWeb-moment"],(function(a,b,c,d,e,f){b("WAWeb-moment").defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10;b=~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th";return a+b},week:{dow:1,doy:4}})}),null);
__d("IntlCLDRNumberType07",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a>=0&&a<=1)return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);