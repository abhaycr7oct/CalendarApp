import React from 'react';
import './styles.css';

function Calendar({ date, onChange }) {
  const selectedDate = new Date(date);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getWeekday = (year, month, day) => {
    return new Date(year, month, day).getDay();
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());
    const firstDayOfWeek = getWeekday(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const days = [];

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="empty-cell" />);
    }

    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === selectedDate.getDate();
      const cellClass = isSelected ? 'date-cell selected' : 'date-cell';
      days.push(
        <div key={`day-${i}`} className={cellClass}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        {selectedDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
      </div>
      <div className="weekdays">
        <div className="weekday">Sun</div>
        <div className="weekday">Mon</div>
        <div className="weekday">Tue</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thu</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>
      </div>
      <div className="dates">{renderDays()}</div>
    </div>
  );
}

export default Calendar;
