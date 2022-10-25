import { useState } from "react";

export default function useFormInput(inputData) {
  const [formInput, setFormInput] = useState(inputData);

  function handleFormInput(evt, propName) {
    setFormInput({ ...formInput, [propName]: evt.target.value });
  }

  function handleCheckBox(evt) {
    const { value, checked } = evt.target;
    const { shipment } = formInput;

    if (checked) {
      setFormInput({
        shipment: [...shipment, value],
      });
    } else {
      setFormInput({
        shipment: shipment.filter((evt) => evt !== value),
      });
    }
  }

  return {
    formInput,
    handleCheckBox,
    handleFormInput,
  };
}
