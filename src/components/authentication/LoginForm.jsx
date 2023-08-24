import React, { useState } from "react";

const LoginForm = () => {
  const values = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(values);
  const [error, setError] = useState(false);

  const submitButton = (e) => {
    e.preventDefault();
    setError(true);
    if (formData.email && formData.password) {
      setError(false);
      setFormData(values);
    }
  };
  return (
    <div className="container vh-100">
      <div className="row align-items-center h-100  justify-content-center position-relative z_index_5 pt-md-2">
        <div className="col-12 col-xl-6">
          <div className="bg_linear_darkblue p_login_form">
            <h3 className="text-white fw-bold ff_gt_walsheim_pro font_2xxl text-center">
              Login
            </h3>
            <form
              className="sign_up_form"
              onSubmit={(e) => {
                submitButton(e);
              }}
            >
              <div className="py_email _login py-md-3 py-2">
                <label htmlFor="email">
                  <p className="mb-1  ff_segoe_ui font_md fw-normal line_h_150per opacity_06 text-white pb-1">
                    Email
                  </p>
                </label>
                <input
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  value={formData.email}
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="w-100 bg-transparent br_5px login_input_modify input_padding_small py-2 px-3 outline-0  ff_segoe_ui font_md fw-normal line_h_150per text-white mt-2"
                />
              </div>
              {error && formData.email === "" && (
                <p className="text-dark mb-0 fw-bold">This field is required</p>
              )}
              {/* password */}
              <div className="mt-1 pt-2 pb-md-3 pb-2">
                <label htmlFor="password">
                  <p className="mb-1 pb-1 ff_segoe_ui font_md fw-normal line_h_150per opacity_06 text-white">
                    Create Password
                  </p>
                </label>
                <input
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  value={formData.password}
                  id="password"
                  placeholder="............"
                  type="password"
                  className="w-100 bg-transparent br_5px login_input_modify input_padding_small py-2 px-3 outline-0  ff_gt_walsheim_pro font_md fw-bold line_h_150per  text-white mt-2"
                />
              </div>
              {error && formData.password === "" && (
                <p className="text-dark mb-0 fw-bold">This field is required</p>
              )}
              <button className="w-100 sumbit_button my-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
