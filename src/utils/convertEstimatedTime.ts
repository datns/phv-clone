const convertEstimatedTime = (milliseconds: number): string => {
  let unit = 'minutes';
  let time = Math.floor(milliseconds / 6000);
  if (time > 60) {
    unit = 'hours';
    time = Math.floor(time / 60);
    if (time > 12) {
      unit = 'days';
      time = Math.floor(time / 12);
    }
  }
  return ` in ${time} ${unit}`;
};

export default convertEstimatedTime;
