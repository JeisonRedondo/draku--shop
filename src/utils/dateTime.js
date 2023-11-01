
export function dateTime() {
  let today = new Date();

  let date = `${today.getFullYear()}\-${today.getMonth() - 1}\-${today.getDate()}`;
  let time = `${today.getHours()}:${today.getMinutes()}`;

  let dateTimeResult = date + ' ' + time;

  return dateTimeResult;
};
