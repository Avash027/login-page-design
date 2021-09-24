const Form = () => {
  return (
    <>
      <div className="login-rect-right-form-header">
        Sign up to Assessment Bot
      </div>

      <label className="label login-rect-right-form-label-1">First name</label>
      <input className="textfield-1 login-rect-right-form-textfield-1"></input>

      <label className="label login-rect-right-form-label-2">Last name</label>
      <input className="textfield-1 login-rect-right-form-textfield-2"></input>

      <label className="label login-rect-right-form-label-3">
        Email Address
      </label>
      <input className="textfield-2 login-rect-right-form-textfield-3"></input>

      <label className="label login-rect-right-form-label-4">
        Company Name
      </label>
      <input className="textfield-2 login-rect-right-form-textfield-4"></input>

      <label className="label login-rect-right-form-label-5">Designation</label>
      <input className="textfield-1 login-rect-right-form-textfield-5"></input>

      <label className="label login-rect-right-form-label-6">
        Company Strength
      </label>
      <input className="textfield-1 login-rect-right-form-textfield-6"></input>

      <label className="label login-rect-right-form-label-7">Password</label>
      <input className="textfield-2 login-rect-right-form-textfield-7"></input>

      <span className="checkbox"></span>
      <div className="login-rect-right-form-terms">
        Signing up means you’re okay with our terms and condition.
      </div>
      <button className="login-rect-right-form-button">Create account</button>

      <div className="login-rect-right-form-bottom">
        Already have an account?
        <span style={{ fontWeight: "600", textDecoration: "underline" }}>
          {" "}
          Log in
        </span>
      </div>
    </>
  );
};

export default Form;
