import logo from "./assets/logo.svg";
import imgDashboard from "./assets/illustration-dashboard.png";
import "./reset.css";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <main>
      <img src={logo} className="app-logo" alt="logo" />
      <h1>
        We are launching <b>soon!</b>
      </h1>
      <p className="subscribe">Subscribe and get notified</p>
      <MyForm />

      <img
        src={imgDashboard}
        className="illustration-dashboard"
        alt="illustration-dashboard"
      />

      <footer>
        <div className="icons">
          <a
            href="https://www.facebook.com/"
            className="fa fa-facebook"
            title="facebook"
          ></a>
          <a
            href="https://twitter.com/"
            className="fa fa-twitter"
            title="twitter"
          ></a>
          <a
            href="https://www.instagram.com/"
            className="fa fa-instagram"
            title="instagram"
          ></a>
        </div>
        <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/SvitlanaSuslenkova">
            Svitlana Suslenkova
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

export default App;
