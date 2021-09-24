import Form from "./Components/Form";

function App() {
  return (
    <div className="login">
      <div className="login-rect-left">
        <div className="login-rect-left-text">
          Let’s get started with the Tests!
        </div>
        <img
          src="./assets/Customize.png"
          alt="testcurators"
          className="login-rect-left-img"
        ></img>
      </div>
      <div className="login-rect-right">
        <div className="login-rect-right-form">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
