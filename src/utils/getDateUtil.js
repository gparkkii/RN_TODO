import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const MonthToString = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

const WeekToString = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
);

const getToday = pickedDate => {
  const newDate = pickedDate ? new Date(pickedDate) : new Date();
  const Month = MonthToString[newDate.getMonth() + 1];

  const Week = WeekToString[newDate.getDay()];

  return { Date: `${Month} ${newDate.getDate()}`, Week };
};

export default getToday;
