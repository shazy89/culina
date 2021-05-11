import React from "react";
import { Card } from "react-bootstrap";

const UserSalary = ({
  profileInfo: { annualSalary, dailyWage, hourlyWage, monthlyWage, weeklyWage }
}) => {
  return (
    <Card className="user__personal user__shadow u-margin-top-small">
      <Card.Body className="font__size-3 u-center-text">
        <h1>Salary to Hourly - Paycheck</h1>
        <h3>Annual salary {annualSalary}</h3>
        <h3>Monthly wage {monthlyWage}</h3>
        <h3>Weekly wage {weeklyWage}</h3>
        <h3>Daily Wage {dailyWage}</h3>
        <h3>Hourly wage {hourlyWage}</h3>
      </Card.Body>
    </Card>
  );
};

export default UserSalary;
