import { CButton, CCol, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";

const NewMenu = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [selectJskill, setSelectJSkill] = useState("");
  const [selectEskill, setSelectESkill] = useState("");

  const [japanSkill, setJapanSkill] = useState([
    { id: "1", level: "N5" },
    { id: "2", level: "N4" },
    { id: "3", level: "N3" },
    { id: "4", level: "N2" },
    { id: "5", level: "N1" },
  ]);

  const [engSkill, setEngSkill] = useState([
    { id: "1", level: "Beginner" },
    { id: "2", level: "Intermidate" },
    { id: "3", level: "Advance" },
  ]);

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const bdChange = (e) => {
    setBirthDay(e.target.value);
  };
  const JChange = (e) => {
    setSelectJSkill(e.target.value);
  };
  const EChange = (e) => {
    setSelectESkill(e.target.value);
  };

  const resetClick =()=>{
    setName("");
    setBirthDay("");
    setEmail("");
    setPhone("");
    setSelectJSkill("");
    setSelectESkill("");
  }

  const sendClick =()=>{
     localStorage.setItem("NAME",name);
  }

  return (
    <>
      <h1 className="mt-3" align="center">
        Register Form
      </h1>
      <br></br>

      <CRow>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">
              <CLabel className="mt-2">Name</CLabel>
            </CCol>
            <CCol lg="7">
              <CInput type="text" value={name} onChange={nameChange} />
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">
              <CLabel className="mt-2">Phone Number</CLabel>
            </CCol>
            <CCol lg="7">
              <CInput type="text" value={phone}
              onChange={phoneChange}
              />
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">
              <CLabel className="mt-2">Japanese Skill</CLabel>
            </CCol>
            <CCol lg="7">
              <CSelect onChange={JChange} value={selectJskill} >
                <option value="">-- Select --</option>
                {japanSkill.map((data, index) => {
                  return (
                    <option key={data.id} value={data.level}>
                      {data.level}
                    </option>
                  );
                })}
              </CSelect>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>

        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">
              <CLabel className="mt-2">Email</CLabel>
            </CCol>
            <CCol lg="7">
              <CInput type="email" value={email}
              onChange={emailChange}
              />
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">
              <CLabel className="mt-2">Birthday</CLabel>
            </CCol>
            <CCol lg="7">
              <CInput type="Date" value={birthDay}
                onChange={bdChange}
              />
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">
              <CLabel className="mt-2">English Skill</CLabel>
            </CCol>
            <CCol lg="7">
              <CSelect value={selectEskill} onChange={EChange}>
                <option value="">-- Select --</option>
                {engSkill.map((data, index) => {
                  return (
                    <option key={data.id} value={data.level}>
                      {data.level}
                    </option>
                  );
                })}
              </CSelect>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
      </CRow>

      <center>
      <CButton className="mt-4 btn btn-outline-success"
        onClick={sendClick}
        >Send</CButton>&emsp;
        <CButton className="mt-4 btn btn-outline-danger"
        onClick={resetClick}
        >Reset</CButton> 
        
      </center>
    </>
  );
};

export default NewMenu;
