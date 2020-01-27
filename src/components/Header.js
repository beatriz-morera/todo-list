import React from 'react';

const Header = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let date = new Date();
  let day = days[date.getDay()];
  let monthDay = date.getDate();
  let month = months[date.getMonth()];
  return (
    <div className="header">
      <h1 className="title">My Day</h1>
      <p className="date">{day.slice(0, 3) + ' ' + monthDay + ' ' + month}</p>
    </div>
  );
};

export default Header;
