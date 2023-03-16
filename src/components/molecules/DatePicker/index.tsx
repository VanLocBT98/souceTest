import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import PullDown, { OptionType } from 'components/molecules/PullDown';
import { getMonth, months, years } from 'utils/functions';

export type RangeDateTypes = {
  startDate?: Date;
  endDate?: Date;
};

interface DatePickerProps {
  id: string;
  placeholder?: {
    startDate: string;
    endDate?: string;
  };
  handleChangeDate: (date: RangeDateTypes) => void;
}

const Datepicker: React.FC<DatePickerProps> = ({
  id, placeholder, handleChangeDate,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (startDate || endDate) {
      handleChangeDate({
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return (
    <div className="m-datePicker">
      <div className="m-datePicker_startDate">
        <DatePicker
          id={`startDate_${id}`}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText={placeholder?.startDate}
          className="m-datePicker_wrapper"
          wrapperClassName={`m-datePicker_container ${startDate && 'm-datePicker_container-selected'}`}
          popperClassName="m-datePicker_popper"
          calendarClassName="m-datePicker_calendar"
          renderCustomHeader={({ date, changeYear, changeMonth }) => (
            <div className="m-datePicker_header">
              <PullDown
                name="month"
                placeholder={String(months[getMonth(date)].label)}
                optionData={months}
                value={{
                  label: String(months[getMonth(date)].label),
                  value: String(months[getMonth(date)].label),
                }}
                handleSelect={(data: OptionType) => {
                  changeMonth(months.findIndex((item) => item.label === data.label));
                }}
              />
              <PullDown
                name="year"
                placeholder={String(date.getFullYear())}
                value={{ label: String(date.getFullYear()), value: String(date.getFullYear()) }}
                optionData={years}
                handleSelect={(data: OptionType) => changeYear(Number(data.label))}
              />
            </div>
          )}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="m-datePicker_endDate">
        <DatePicker
          id={`endDate_${id}`}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText={placeholder?.endDate}
          className="m-datePicker_wrapper"
          wrapperClassName={`m-datePicker_container ${endDate && 'm-datePicker_container-selected'}`}
          popperClassName="m-datePicker_popper"
          calendarClassName="m-datePicker_calendar"
          renderCustomHeader={({ date, changeYear, changeMonth }) => (
            <div className="m-datePicker_header">
              <PullDown
                name="month"
                placeholder={String(months[getMonth(date)].label)}
                optionData={months}
                value={{
                  label: String(months[getMonth(date)].label),
                  value: String(months[getMonth(date)].label),
                }}
                handleSelect={(data: OptionType) => {
                  changeMonth(months.findIndex((item) => item.label === data.label));
                }}
              />
              <PullDown
                name="year"
                placeholder={String(date.getFullYear())}
                value={{ label: String(date.getFullYear()), value: String(date.getFullYear()) }}
                optionData={years}
                handleSelect={(data: OptionType) => changeYear(Number(data.label))}
              />
            </div>
          )}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
};

Datepicker.defaultProps = {
};

export default Datepicker;
