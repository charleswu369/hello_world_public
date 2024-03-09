function calculateDaysBetweenDates(beginDate, endDate) {
    var millisecondsPerDay = 86400000;
    var beginDateMilliseconds = beginDate.getTime();
    var endDateMilliseconds = endDate.getTime();
    var differenceMilliseconds = endDateMilliseconds - beginDateMilliseconds;
    return Math.round(differenceMilliseconds / millisecondsPerDay);
}

#next suggestion
function calculateDaysBetweenDates(beginDate, endDate) {
    var millisecondsPerDay = 86400000;
    var differenceMilliseconds = endDate.getTime() - beginDate.getTime();
    return Math.round(differenceMilliseconds / millisecondsPerDay);


// Path: javascript.js
function calculateDaysBetweenDates(beginDate, endDate) {
    var millisecondsPerDay = 86400000;
    var beginDateMilliseconds = beginDate.getTime();
    var endDateMilliseconds = endDate.getTime();
    var differenceMilliseconds = endDateMilliseconds - beginDateMilliseconds;
    return Math.round(differenceMilliseconds / millisecondsPerDay);
}
