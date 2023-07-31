import React, { useState } from "react";

const FormValidation = () => {
  const initialValue = {
    name: "",
    email: "",
    checkbox: false,
    password: "",
    confPassword: "",
  };
  const [valueData, setValuedata] = useState(initialValue);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
    if (
      valueData.name &&
      valueData.email &&
      valueData.checkbox &&
      valueData.confPassword &&
      valueData.password &&
      valueData.confPassword === valueData.password
    ) {
      setValuedata(initialValue);
      console.log(valueData, "valueData");
    }
  };

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center overflow-hidden position-relative w-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <form
              action=""
              onSubmit={(e) => handleSubmit(e)}
              className="form_validation"
            >
              <input
                onChange={(e) =>
                  setValuedata({ ...valueData, name: e.target.value })
                }
                type="text"
                placeholder="Name"
                value={valueData.name}
              />
              {valueData.name === "" && error && <p>Error</p>}
              <input
                onChange={(e) =>
                  setValuedata({ ...valueData, email: e.target.value })
                }
                type="text"
                placeholder="Email"
                value={valueData.email}
              />
              {valueData.email === "" && error && <p>Email Error</p>}
              <input
                onChange={(e) =>
                  setValuedata({ ...valueData, password: e.target.value })
                }
                type={show ? "text" : "password"}
                placeholder="Password"
                value={valueData.password}
              />
              <div onClick={() => setShow(!show)} className="text-start">
                {show ? <span>hide</span> : <span>show</span>}
              </div>
              <input
                onChange={(e) =>
                  setValuedata({ ...valueData, confPassword: e.target.value })
                }
                type="text"
                placeholder="confPassword"
                value={valueData.confPassword}
              />
              {valueData.confPassword !== valueData.password && error && (
                <p>Does not match </p>
              )}
              <input type="date" name="" id="" />
              <input
                onChange={(e) =>
                  setValuedata({ ...valueData, checkbox: e.target.checked })
                }
                type="checkbox"
                name=""
                id=""
                checked={valueData.checkbox}
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
