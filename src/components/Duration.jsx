import React, { useState } from "react";

const Duration = () => {
  const [selectedHours, setSelectedHours] = useState("");
  const [selectedMinutes, setSelectedMinutes] = useState("");

  const handleHoursChange = (e) => {
    const hours = e.target.value;
    setSelectedHours(hours);
  };

  const handleMinutesChange = (e) => {
    const minutes = e.target.value;
    setSelectedMinutes(minutes);
  };

  return (
    <div className="time-duration-selector">
      <input
        type="text"
        value={selectedHours}
        onChange={handleHoursChange}
        list="hoursList"
      />
      <datalist id="hoursList">
        {Array.from(Array(13).keys()).map((hour) => (
          <option key={hour}>{hour.toString().padStart(2, "0")}</option>
        ))}
      </datalist>
      <span className="separator">:</span>
      <input
        type="text"
        value={selectedMinutes}
        onChange={handleMinutesChange}
        list="minutesList"
      />
      <datalist id="minutesList">
        {Array.from(Array(61).keys()).map((minute) => (
          <option key={minute}>{minute.toString().padStart(2, "0")}</option>
        ))}
      </datalist>
    </div>
  );
};

export default Duration;
