import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import axios from "axios";
import Swal from "sweetalert2";

const Form = () => {
  const [numFields, setNumFields] = useState(0);
  const [inputValues, setInputValues] = useState([]);
  const [batch, setBatch] = useState("");
  const [leaderContact, setLeaderContact] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [teamName, setTeamName] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setNumFields(selectedValue);
    setInputValues([]);
  };

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const renderInputFields = () => {
    const inputFields = [];
    for (let i = 0; i < numFields; i++) {
      inputFields.push(
        <div key={i}>
          <MDBInput
            type="text"
            required={true}
            className={"mb-4"}
            onChange={(event) => handleInputChange(event, i)}
            label={`Member ${i + 1} Name`}
          />
        </div>
      );
    }
    return inputFields;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Batch: batch,
      "Team Name": teamName,
      "Member Count": inputValues.length,
      "Contact Number": leaderContact,
      Email: leaderEmail,
      "Member One": inputValues[0] === undefined ? "-" : inputValues[0],
      "Member Two": inputValues[1] === undefined ? "-" : inputValues[1],
      "Member Three": inputValues[2] === undefined ? "-" : inputValues[2],
      "Member Four": inputValues[3] === undefined ? "-" : inputValues[3],
    };

    axios
      .post(
        "https://sheet.best/api/sheets/6f8ea035-5a72-4e41-9ab6-fbb082689809",
        data
      )
      .then((response) => {
        console.log(response.data);
        Swal.fire("Submitted!", "Your response has been recorded!", "success");
      });
  };

  return (
    <>
      <div className={"container mt-5"}>
        <MDBValidation>
          <form>
            <label className={"mb-2 fw-bold"} htmlFor="batch">
              Batch
            </label>
            <MDBValidationItem
              feedback={"Please enter you batch name"}
              invalid={true}
            >
              <MDBInput
                wrapperClass="mb-4"
                id="batch"
                required={true}
                label="Enter Your Batch"
                value={batch}
                onChange={(event) => setBatch(event.target.value)}
              />
            </MDBValidationItem>

            <label className={"mb-2 fw-bold"} htmlFor="team_name">
              Your Team Name
            </label>
            <MDBInput
              wrapperClass="mb-4"
              id="team_name"
              required={true}
              label="Team Name"
              value={teamName}
              onChange={(event) => setTeamName(event.target.value)}
            />

            <label className={"mb-2 fw-bold"} htmlFor="members">
              Number Of members
            </label>
            <select
              id="members"
              value={numFields}
              className={"form-select mb-3"}
              onChange={handleSelectChange}
            >
              <option value="0">Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              {/* Add more options as needed */}
            </select>
            {renderInputFields()}
            <MDBRow className="mb-4 mt-5">
              <MDBCol>
                <label className={"mb-2 fw-bold"} htmlFor="contact_number">
                  Leader's Contact Number
                </label>
                <MDBInput
                  id="contact_number"
                  required={true}
                  value={leaderContact}
                  onChange={(event) => setLeaderContact(event.target.value)}
                  label="Contact Number"
                />
              </MDBCol>
              <MDBCol>
                <label className={"mb-2 fw-bold"} htmlFor="email">
                  Leader's Email
                </label>
                <MDBInput
                  value={leaderEmail}
                  onChange={(event) => setLeaderEmail(event.target.value)}
                  id="email"
                  type={"email"}
                  required={true}
                  label="Email"
                />
              </MDBCol>
            </MDBRow>

            <MDBBtn
              className="mb-4 mt-4"
              type="submit"
              onSubmit={(e) => handleSubmit(e)}
              block
            >
              Submit
            </MDBBtn>
          </form>
        </MDBValidation>
      </div>
    </>
  );
};

export default Form;
