import React from 'react';
import AppointmentCalendar from './AppointmentCalendar';

const AppointmentScheduling = ({route, navigation}: any) => {
  // Simply render the AppointmentCalendar component
  return <AppointmentCalendar route={route} navigation={navigation} />;
};

export default AppointmentScheduling;
