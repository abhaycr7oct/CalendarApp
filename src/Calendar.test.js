import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calendar from './components/Calendar';

describe('Calendar', () => {
  test('renders the calendar component with the correct selected date', () => {
    const selectedDate = new Date(2023, 5, 15); // June 15, 2023
    const { getByText } = render(<Calendar date={selectedDate} />);
    const selectedDateElement = getByText('15');
    expect(selectedDateElement).toBeInTheDocument();
    expect(selectedDateElement).toHaveClass('selected');
  });

  

  test('does not allow selecting a different date', () => {
    const selectedDate = new Date(2023, 5, 15); // June 15, 2023
    const { getByText } = render(<Calendar date={selectedDate} />);
    const otherDateElement = getByText('10');
    fireEvent.click(otherDateElement);
    const selectedDateElement = getByText('15');
    expect(otherDateElement).not.toHaveClass('selected');
    expect(selectedDateElement).toHaveClass('selected');
  });
});