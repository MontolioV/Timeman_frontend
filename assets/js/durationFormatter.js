function formatDuration(durationInMs) {
  const DAY_IN_MS = 86400000;
  const HOUR_IN_MS = 3600000;
  const MINUTE_IN_MS = 60000;
  const SECOND_IN_MS = 1000;
  const duration = {};
  let dur = durationInMs;
  const prepend0 = function(num) {
    return num < 10 ? '0' + num : num;
  };

  duration.d = Math.floor(dur / DAY_IN_MS);
  dur = dur % DAY_IN_MS;
  duration.h = prepend0(Math.floor(dur / HOUR_IN_MS));
  dur = dur % HOUR_IN_MS;
  duration.m = prepend0(Math.floor(dur / MINUTE_IN_MS));
  dur = dur % MINUTE_IN_MS;
  duration.s = prepend0(Math.floor(dur / SECOND_IN_MS));

  if (duration.d === 0) {
    return `${duration.h}:${duration.m}:${duration.s}`;
  } else {
    return `${duration.d}:${duration.h}:${duration.m}:${duration.s}`;
  }
}

export default formatDuration;
