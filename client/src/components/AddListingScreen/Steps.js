import React from 'react';

const steps = [
  {
    stepNumber: 1,
    heading: 'Listing Type',
  },
  {
    stepNumber: 2,
    heading: 'Create Listing',
  },
  {
    stepNumber: 3,
    heading: 'Done',
  },
];

const Steps = () => {
  return (
    <div>
      <div>
        <h1>Add New Property</h1>
      </div>
      <div>
        {steps.map(step => (
          <div key={step.stepNumber}>
            <h1>{step.heading}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
