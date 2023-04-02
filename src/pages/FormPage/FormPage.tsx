import React, { useState } from 'react';

import FormComponent from '../../components/FormComponent/FormComponent';
import FormCard from '../../components/FormCard/FormCard';

const FormPage = function FormPage() {
  const [formValues, setFormValues] = useState([
    {
      firstName: '',
      lastName: '',
      birthDate: '',
      fileInput: '',
      country: '',
      agree: true,
      gender: '',
    },
  ]);

  return (
    <div>
      <FormComponent setFormValues={setFormValues}></FormComponent>
      <div>
        {formValues.length > 1 &&
          formValues.map((i, ind) => {
            if (ind >= 1) {
              return <FormCard {...i} key={ind}></FormCard>;
            }
          })}
      </div>
    </div>
  );
};

export default FormPage;
