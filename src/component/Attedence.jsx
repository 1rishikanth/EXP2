import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceList = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get('http://localhost:3000/attendance');
        setAttendance(response.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div>
      <h2>Attendance List</h2>
      <ul>
        {attendance.map((record) => (
          <li key={record.id}>{record.studentName} - {record.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceList;
