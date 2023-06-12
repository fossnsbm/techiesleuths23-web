import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

const Form = () => {
  const [numFields, setNumFields] = useState(0);

  const handleSelectChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setNumFields(selectedValue);
  };

  const renderInputFields = () => {
    const inputFields = [];
    for (let i = 0; i < numFields; i++) {
      inputFields.push(
        <div key={i}>
          <MDBInput type="text" className={"mb-4"} label={`Member ${i + 1} Name`} />
        </div>
      );
    }
    return inputFields;
  };

  return (
    <>
      <div className={"container mt-5"}>
        <form>
          <label className={"mb-2"} htmlFor="numFields">Number Of members</label>
          <select
            id="numFields"
            value={numFields}
            className={"form-select mb-3"}
            onChange={handleSelectChange}
          >
            <option value="0">Please Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            {/* Add more options as needed */}
          </select>
          {renderInputFields()}
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput id="form6Example1" label="First name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id="form6Example2" label="Last name" />
            </MDBCol>
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            id="form6Example3"
            label="Company name"
          />
          <MDBInput wrapperClass="mb-4" id="form6Example4" label="Address" />
          <MDBInput
            wrapperClass="mb-4"
            type="email"
            id="form6Example5"
            label="Email"
          />
          <MDBInput
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label="Phone"
          />

          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Additional information"
          />

          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form6Example8"
            label="Create an account?"
            defaultChecked
          />

          <MDBBtn className="mb-4" type="submit" block>
            Place order
          </MDBBtn>
        </form>
      </div>
    </>
  );
};

export default Form;
