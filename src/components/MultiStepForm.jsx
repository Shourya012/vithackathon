import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import Step1BasicInfo from "./Steps/Step1BasicInfo";
import Step2MedicalHistory from "./Steps/Step2MedicalHistory";
import Step3DietaryHabits from "./Steps/Step3DietaryHabits";
import Step4Lifestyle from "./Steps/Step4Lifestyle";
import Step5ReviewSubmit from "./Steps/step5ReviewSubmit";

const steps = ["Basic Info", "Medical History", "Dietary Habits", "Lifestyle", "Review & Submit"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>

      <div className="mt-5">
        {activeStep === 0 && <Step1BasicInfo />}
        {activeStep === 1 && <Step2MedicalHistory />}
        {activeStep === 2 && <Step3DietaryHabits />}
        {activeStep === 3 && <Step4Lifestyle />}
        {activeStep === 4 && <Step5ReviewSubmit />}

        <div className="flex justify-between mt-5">
          {activeStep > 0 && (
            <Button variant="outlined" onClick={handleBack}>Back</Button>
          )}
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
          ) : (
            <Button variant="contained" color="success">Submit</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
