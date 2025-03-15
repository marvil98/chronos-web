"use client";
import React, { useState, useEffect } from "react";
import {
  CalendarToday,
  ChevronLeft,
  ChevronRight,
  ArrowDropDown,
} from "@mui/icons-material";
import "../Datepicker/CustomDatePicker.css";

interface CustomDatePickerProps {
  value?: any;
  onChange?: any;
  error?: any;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  error,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(7);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [showMonthSelector, setShowMonthSelector] = useState(false);

  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  useEffect(() => {
    if (value) {
      setSelectedDate(new Date(value));
    }
  }, [value]);

  const handleDateClick = (day: any) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setIsOpen(false);
    onChange && onChange(newDate);
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  const prevYear = () => {
    setCurrentYear((prev) => prev - 1);
  };

  const nextYear = () => {
    setCurrentYear((prev) => prev + 1);
  };

  return (
    <div className="custom-datepicker">
      <div
        className={`input-container ${error ? "error" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <label
          className={`datepicker-label ${selectedDate ? "transformed" : ""}`}
        >
          Fecha
        </label>
        <input
          type="text"
          className="datepicker-input"
          value={selectedDate ? selectedDate.toLocaleDateString("es-ES") : ""}
          readOnly
        />
        <CalendarToday className="icon" color="action" />
      </div>
      {error && (
        <span className="error-message">Este campo es obligatorio</span>
      )}
      {isOpen && (
        <div className="calendar-container">
          <div
            className="calendar-header"
            style={{ borderRadius: "0 0 10px 10px" }}
          >
            <div className="header-group">
              <ChevronLeft className="nav-arrow" onClick={prevMonth} />
              <span
                className="month"
                onClick={() => {
                  setShowMonthSelector(!showMonthSelector);
                  setShowYearSelector(false);
                }}
              >
                {months[currentMonth]}{" "}
                <ArrowDropDown className="dropdown-icon" />
              </span>
              <ChevronRight className="nav-arrow" onClick={nextMonth} />
            </div>
            <div className="header-group">
              <ChevronLeft className="nav-arrow" onClick={prevYear} />
              <span
                className="year"
                onClick={() => {
                  setShowYearSelector(!showYearSelector);
                  setShowMonthSelector(false);
                }}
              >
                {currentYear} <ArrowDropDown className="dropdown-icon" />
              </span>
              <ChevronRight className="nav-arrow" onClick={nextYear} />
            </div>
          </div>
          {showMonthSelector && (
            <div className="month-selector">
              {months.map((month, index) => (
                <div
                  key={index}
                  className="month-option"
                  onClick={() => {
                    setCurrentMonth(index);
                    setShowMonthSelector(false);
                  }}
                >
                  {month}
                </div>
              ))}
            </div>
          )}
          {showYearSelector && (
            <div className="year-selector">
              {Array.from({ length: 10 }, (_, i) => currentYear - 5 + i).map(
                (year) => (
                  <div
                    key={year}
                    className="year-option"
                    onClick={() => {
                      setCurrentYear(year);
                      setShowYearSelector(false);
                    }}
                  >
                    {year}
                  </div>
                ),
              )}
            </div>
          )}
          {!showMonthSelector && !showYearSelector && (
            <div className="calendar-grid">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i} className="day-label">
                  {d}
                </div>
              ))}
              {Array(firstDay)
                .fill(null)
                .map((_, i) => (
                  <div key={"empty" + i} className="empty-day"></div>
                ))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                (day) => (
                  <div
                    key={day}
                    className={`day ${selectedDate instanceof Date && selectedDate.getDate() === day ? "selected" : ""}`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day}
                  </div>
                ),
              )}
            </div>
          )}
          <div className="calendar-footer">
            <button onClick={() => setIsOpen(false)} className="cancel">
              Cancel
            </button>
            <button onClick={() => setIsOpen(false)} className="ok">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
