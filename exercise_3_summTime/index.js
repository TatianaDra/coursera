/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports=function (hours, minutes, interval) {
    minutes=minutes+interval;
    while (minutes>59) {
        hours+=1;
        minutes=minutes-60;
    }
    while (hours>23) {
        hours=hours-24;
    }
    if (hours<10)
        hours="0"+hours;
    if (minutes<10)
        minutes="0"+minutes;


    return hours+":"+minutes;


};