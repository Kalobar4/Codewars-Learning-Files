// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.


const formatDuration = (seconds) => {
  // Time calculations for years, days, hours, minutes and seconds
  let years = Math.floor(seconds / (60 * 60 * 24 * 365));
  let days = years > 0 ? Math.floor((seconds % (years * 60 * 60 * 24 * 365)) / (60 * 60 * 24)) : Math.floor(seconds / (60 * 60 * 24))
  let hours = days > 0 || years > 0 ? Math.floor((seconds % (years * 60 * 60 * 24 * 365 + days * 60 * 60 * 24)) / (60 * 60)) : Math.floor(seconds / (60 * 60))
  let minutes = hours > 0 || days > 0 || years > 0 ? Math.floor((seconds % (years * 60 * 60 * 24 * 365 + days * 60 * 60 * 24 + hours * 60 * 60)) / (60)) : Math.floor(seconds / (60));
  let seconds2 = minutes > 0 || hours > 0 || days > 0 || years > 0 ? Math.floor((seconds % (years * 60 * 60 * 24 * 365 + days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60))) : Math.floor(seconds)

  // Time objects to manage plural output of string concatenation
  timeArray = [years, days, hours, minutes, seconds2]
  timeObject = {
    "years": {
      val: timeArray[0],
      isLast: ((timeArray[1] + timeArray[2] + timeArray[3] + timeArray[4]) === 0 && timeArray[0] > 0 ? true : false),
      isSecondToLast: (timeArray[1] > 0 && (timeArray[2] + timeArray[3] + timeArray[4]) === 0 && timeArray[0] > 0 ? true : false),
      isOnly: ((timeArray[1] + timeArray[2] + timeArray[3] + timeArray[4]) === 0 && timeArray[0] > 0 ? true : false),
      isPlural: (timeArray[0] > 1 ? true : false)
    },
    "days": {
      val: timeArray[1],
      isLast: ((timeArray[2] + timeArray[3] + timeArray[4]) === 0 && timeArray[1] > 0 ? true : false),
      isSecondToLast: (timeArray[2] > 0 && (timeArray[3] + timeArray[4]) === 0 && timeArray[1] > 0 ? true : false),
      isOnly: ((timeArray[0] + timeArray[2] + timeArray[3] + timeArray[4]) === 0 && timeArray[1] > 0 ? true : false),
      isPlural: (timeArray[1] > 1 ? true : false)
    },
    "hours": {
      val: timeArray[2],
      isLast: ((timeArray[3] + timeArray[4]) === 0 && timeArray[2] > 0 ? true : false),
      isSecondToLast: (timeArray[3] > 0 && (timeArray[4]) === 0 && timeArray[2] > 0 ? true : false),
      isOnly: ((timeArray[1] + timeArray[0] + timeArray[3] + timeArray[4]) === 0 && timeArray[2] > 0 ? true : false),
      isPlural: (timeArray[2] > 1 ? true : false)
    },
    "minutes": {
      val: timeArray[3],
      isLast: ((timeArray[4]) === 0 && timeArray[3] > 0 ? true : false),
      isSecondToLast: (timeArray[4] > 0 && timeArray[3] > 0 ? true : false),
      isOnly: ((timeArray[1] + timeArray[2] + timeArray[0] + timeArray[4]) === 0 && timeArray[3] > 0 ? true : false),
      isPlural: (timeArray[3] > 1 ? true : false)
    },
    "seconds": {
      val: timeArray[4],
      isLast: (timeArray[4] > 0 ? true : false),
      isOnly: ((timeArray[1] + timeArray[2] + timeArray[3] + timeArray[0]) === 0 && timeArray[4] > 0 ? true : false),
      isPlural: (timeArray[4] > 1 ? true : false)
    }
  }

  // String literal to concatenate return
  let result1 = `${timeArray[0] === 0 ? '' : timeObject.years.isPlural ? years + ' years' : years + ' year'}${timeArray[0] === 0 ? '' : timeObject.years.isLast ? '' : timeArray[0] === 0 ? '' : timeObject.years.isSecondToLast ? ' and ' : ', '}`

  let result2 = `${timeArray[1] === 0 ? '' : timeObject.days.isPlural ? days + ' days' : days + ' day'}${timeArray[1] === 0 ? '' : timeObject.days.isLast ? '' : timeObject.days.isSecondToLast ? 'and' : ', '}`

  let result3 = `${timeArray[2] === 0 ? '' : timeObject.hours.isPlural ? hours + ' hours' : hours + ' hour'}${timeArray[2] === 0 ? '' : timeObject.hours.isLast ? '' : timeObject.hours.isSecondToLast ? ' and ' : ', '}`

  let result4 = `${timeArray[3] === 0 ? '' : timeObject.minutes.isPlural ? minutes + ' minutes' : minutes + ' minute'}${timeArray[3] === 0 ? '' : timeObject.minutes.isLast ? '' : timeObject.minutes.isSecondToLast ? ' and ' : ', '}`

  let result5 = `${timeArray[4] === 0 ? '' : timeObject.seconds.isPlural ? seconds2 + ' seconds' : seconds2 + ' second'}`

  let result = (result1 + result2 + result3 + result4 + result5).replace('/n', "").trim();

  // return result
  if (Math.max(...timeArray) === 0) {
    return 'now'
  } else return result
}

// formatDuration(3600)  // returns "1 hour"
// formatDuration(0)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// formatDuration(33243586)  // returns "1 hour, 1 minute and 2 seconds"
// confirm results and typeof results to return
// console.log(timeArray)
// console.log(timeObject)
// console.log(Object.prototype.toString.call(timeArray));
// console.log(result)


///  Other Solutions to learn from  ///


function formatDuration2(seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];

  if (seconds === 0) return 'now';

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds / time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }

  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
}

function formatDuration3(seconds) {
  if (!seconds) return "now";
  var strout = "";
  var s = seconds % 60;
  seconds = (seconds - s) / 60;
  var m = seconds % 60;
  seconds = (seconds - m) / 60;
  var h = seconds % 24;
  seconds = (seconds - h) / 24;
  var d = seconds % 365;
  seconds = (seconds - d) / 365;
  var y = seconds;

  var english = [];
  if (y) english.push(y + " year" + (y > 1 ? 's' : ''));
  if (d) english.push(d + " day" + (d > 1 ? 's' : ''));
  if (h) english.push(h + " hour" + (h > 1 ? 's' : ''));
  if (m) english.push(m + " minute" + (m > 1 ? 's' : ''));
  if (s) english.push(s + " second" + (s > 1 ? 's' : ''));

  return english.join(", ").replace(/,([^,]*)$/, " and$1");

}


function formatDuration5(seconds) {
  if (seconds == 0) return "now";
  var s = {
    "year": (60 * 60 * 24 * 365),
    "day": (60 * 60 * 24),
    "hour": (60 * 60),
    "minute": 60
  }
  var output = new Array();
  var years = Math.floor(seconds / s.year);
  if (years > 0) {
    output.push(years + " year" + (years == 1 ? "" : "s"));
    seconds = seconds % s.year;
  }
  var days = Math.floor(seconds / s.day);
  if (days > 0) {
    output.push(days + " day" + (days == 1 ? "" : "s"));
    seconds = seconds % s.day;
  }
  var hours = Math.floor(seconds / s.hour);
  if (hours > 0) {
    output.push(hours + " hour" + (hours == 1 ? "" : "s"));
    seconds = seconds % s.hour;
  }
  var minutes = Math.floor(seconds / s.minute);
  if (minutes > 0) {
    output.push(minutes + " minute" + (minutes == 1 ? "" : "s"));
    seconds = seconds % s.minute;
  }
  if (seconds > 0) {
    output.push(seconds + " second" + (seconds == 1 ? "" : "s"));
  }
  if (output.length > 1) {
    var last = output.pop();
    return output.join(", ") + " and " + last;
  } else {
    return output[0];
  }
}

var formatDuration4 = (function () {

  return function formatDuration(seconds) {
    return [{ name: 'year', size: 365 * 24 * 60 * 60 * 1 },
    { name: 'day', size: 24 * 60 * 60 * 1 },
    { name: 'hour', size: 60 * 60 * 1 },
    { name: 'minute', size: 60 * 1 },
    { name: 'second', size: 1 }].
      reduce(parse, { parts: [], seconds: seconds }).
      parts.
      reduce(join, 'now');
  };

  function parse(result, part) {
    var quantity = Math.floor(result.seconds / part.size);
    if (quantity > 0) {
      result.seconds -= quantity * part.size;
      result.parts.push(quantity + ' ' + part.name + (quantity == 1 ? '' : 's'));
    }
    return result;
  }

  function join(result, part, index, arr) {
    switch (index) {
      case 0: return part;
      case arr.length - 1: return result + ' and ' + part;
      default: return result + ', ' + part;
    }
  }

}());


/////  STUDY THIS!!!!!  //////

const formatDurationBest = s => s == 0 ? 'now' :
  [Math.floor(s / 60 / 60 / 24 / 365),
  Math.floor(s / 60 / 60 / 24) % 365,
  Math.floor(s / 60 / 60) % 24,
  Math.floor(s / 60) % 60,
  s % 60]
    .map((e, i) => e + ' ' + ['year', 'day', 'hour', 'minute', 'second'][i] + (+e > 1 ? 's' : ''))
    .filter(e => !/^0/.test(e))
    .join(', ')
    .replace(/,\s(?=[\d\s\w]*$)/, ' and ');
