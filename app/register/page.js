"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Register() {
  //const
  const [currentStep, setCurrentStep] = useState(1);
  //step1
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [muiDate, setMuiDate] = useState(null);
  //step2
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  //step3
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    match: false,
  });
  const [focused, setFocused] = useState(false);

  //formdata
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    gender: "",
    date: null,
    username: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  //next
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      if (currentStep === 1) {
        const date = muiDate.format("YYYY-MM-DD");
        setFormData({
          ...formData,
          name,
          lastName,
          gender,
          date,
        });
      } else if (currentStep === 2) {
        setFormData({
          ...formData,
          username,
          email,
        });
      }
    } else {
      const updatedFormData = {
        ...formData,
        newPassword,
        confirmPassword,
      };
      setFormData(updatedFormData);
      handleSubmit(updatedFormData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFormFilledStep1 = () => {
    return name && lastName && gender && muiDate;
  };

  const isFormFilledStep2 = () => {
    return username && email;
  };

  const isFormFilledStep3 = () => {
    return newPassword && confirmPassword && passwordCriteria.match;
  };

  const handleSubmit = (finalformdata) => {
    //formdata for sai
    console.log("Form Data:", finalformdata);
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
    };
  };

  // input changes
  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    const criteria = validatePassword(value);
    setPasswordCriteria({
      ...criteria,
      match: value === confirmPassword && value !== "",
    });
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordCriteria((prev) => ({
      ...prev,
      match: newPassword === value && value !== "",
    }));
  };

  // focus handler
  const handleFocus = (field) => {
    setFocused(field);
  };
  //step 3
  const getConstraintsText = () => {
    return (
      <>
        {/* text cases */}
        {focused && (
          <div>
            <div className="reset-constraint-top">
              Please create a new password that meets the following
              requirements:
            </div>
            <ul>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.match ? "green" : "red",
                }}
              >
                {passwordCriteria.match ? "✔" : "✕"} Passwords{" "}
                {passwordCriteria.match ? "match" : "does not match"}
              </li>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.length ? "green" : "red",
                }}
              >
                {passwordCriteria.length ? "✔" : "✕"} At least 8 characters long
              </li>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.number ? "green" : "red",
                }}
              >
                {passwordCriteria.number ? "✔" : "✕"} Contains at least one
                number {"(0-9)"}
              </li>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.uppercase ? "green" : "red",
                }}
              >
                {passwordCriteria.uppercase ? "✔" : "✕"} Contains at least one
                uppercase letter {"(A-Z)"}
              </li>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.lowercase ? "green" : "red",
                }}
              >
                {passwordCriteria.lowercase ? "✔" : "✕"} Contains at least one
                lowercase letter {"(a-z)"}
              </li>
            </ul>
          </div>
        )}
      </>
    );
  };

  //custom dp
  const baseStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "#F9F9F9",
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none !important",
      },
      "& .MuiInputBase-input": {
        color: "gray",
        fontSize: "14px", // Font size
        fontFamily: "'Inter', sans-serif", // Font family
        fontWeight: 400, // Font weight
      },
      // Style for the calendar icon
      "& .MuiSvgIcon-root": {
        fontSize: "20px", // Adjust icon size if needed
      },
    },
    ".MuiDateCalendar-root": {
      color: "#1565c0",
      borderRadius: "16px",
      borderWidth: "1px",
      borderColor: "#2196f3",
      border: "1px solid",
      backgroundColor: "#90caf9",
    },
  };

  const filledStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#F8F8FF",
      "& fieldset": {
        border: "none !important",
      },
      "&.Mui-focused fieldset": {
        border: "none !important",
      },
      "& .MuiInputBase-input": {
        color: "#5F58B0",
        fontSize: "14px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
      },
    },
  };
  //end custom dp

  const router = useRouter();
  return (
    <div className="global-container">
      <div className="login-container">
        <h1 className="login-heading-1">Welcome to Goodify</h1>
        <div style={{ marginBottom: "8%" }}></div>
        <form onSubmit={handleSubmit} className="login-form">
          {currentStep === 1 && (
            <>
              <h3 className="login-heading-3">Create a new account</h3>
              <label
                className={`login-input-label ${isInvalid ? "error" : ""}`}
              >
                First Name
              </label>
              <input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`login-input-field ${name ? "filled" : ""}`}
              />
              <label
                className={`login-input-label ${isInvalid ? "error" : ""}`}
              >
                Last Name
              </label>
              <input
                placeholder="Enter your surname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className={`login-input-field ${lastName ? "filled" : ""}`}
              />
              <label
                className={`login-input-label ${isInvalid ? "error" : ""}`}
              >
                Date of birth
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={muiDate}
                  onChange={(newValue) => setMuiDate(newValue)}
                  sx={{
                    width: "100%",
                    ...baseStyles,
                    ...(muiDate && filledStyles),
                  }}
                />
              </LocalizationProvider>
              <label
                className={`login-input-label ${isInvalid ? "error" : ""}`}
              >
                Gender
              </label>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  width: "100%",
                  backgroundColor: gender ? "#F8F8FF" : "#F9F9F9",
                  color: gender ? "gray" : "#5F58B0",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-select": {
                    color: gender ? "#5F58B0" : "gray",
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      "& .MuiMenuItem-root": {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#2D2467",
                        "&:hover": {
                          backgroundColor: "#F8F8FF",
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Others"}>Prefer not to say</MenuItem>
              </Select>
              <button
                type="button"
                className="login-button"
                onClick={handleNext}
                disabled={!isFormFilledStep1()}
              >
                Next
              </button>
            </>
          )}
          {currentStep === 2 && (
            <>
              <img
                src="/images/back.png"
                style={{ alignSelf: "flex-start", cursor: "pointer" }}
                onClick={handleBack}
              ></img>
              <h3 className="login-heading-3">Create a new account</h3>
              <label className="login-input-label">Username</label>
              <input
                placeholder="Enter your username"
                required
                className={`login-input-field ${username ? "filled" : ""}`}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="login-input-label">Email</label>
              <input
                placeholder="Enter your email"
                type="email"
                required
                className={`login-input-field ${email ? "filled" : ""}`}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                className="login-button"
                onClick={handleNext}
                disabled={!isFormFilledStep2()}
              >
                Next
              </button>
            </>
          )}
          {currentStep === 3 && (
            <>
              <img
                src="/images/back.png"
                style={{ alignSelf: "flex-start", cursor: "pointer" }}
                onClick={handleBack}
              ></img>
              <h3 className="login-heading-3">Create a new account</h3>
              <label className="login-input-label">Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                onFocus={() => handleFocus(true)}
                required
                className="login-input-field"
              />
              <label className="login-input-label">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onFocus={() => handleFocus(true)}
                required
                className="login-input-field"
              />
              {/* show text */}
              {focused && <div>{getConstraintsText()}</div>}
              <button
                type="button"
                className="login-button"
                onClick={handleNext}
                disabled={!isFormFilledStep3()}
              >
                Register
              </button>
            </>
          )}
          <div className="progress-dots">
            <span className={`dot ${currentStep === 1 ? "active" : ""}`}></span>
            <span className={`dot ${currentStep === 2 ? "active" : ""}`}></span>
            <span className={`dot ${currentStep === 3 ? "active" : ""}`}></span>
          </div>
        </form>
        <div className="login-double-text">
          <span className="login-no-account">Already have an account?</span>
          <span
            className="login-register"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            Login
          </span>
        </div>
        <div className="social-login-container">
          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">OR</span>
          </div>

          <div className="social-login">
            <p className="login-text">Register with</p>
            <div className="social-buttons">
              <button className="social-button">
                <img
                  src="/images/google.png"
                  alt="Google login"
                  className="social-icon"
                  style={{ cursor: "pointer" }}
                />
              </button>
              <button className="social-button">
                <img
                  src="/images/facebook.png"
                  alt="Facebook login"
                  className="social-icon"
                  style={{ cursor: "pointer" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
