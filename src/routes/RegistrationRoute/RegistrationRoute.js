import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "../../components/RegistrationForm/RegistrationForm.css";

class RegistrationRoute extends Component {
  constructor(props) {
    super(props);
    this.SignUpFocus = React.createRef();
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  handleClickFocus = (event) => {
    if (this.SignUpFocus.current) {
      this.SignUpFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  render() {
    return (
      <section className="RegistrationRoute">
        <div
          style={{
            width: "100%",
            padding: "20px 30px",
            backgroundColor: "#FFFCF9",
            marginBottom: "30px",
          }}
        >
          <p className="RR_description" style={{ marginBottom: "0px" }}>
            Practice learning Catalan with the spaced repetition revision
            technique and quiz yourself with virtual flash cards!
          </p>
        </div>

        <div
          style={{
            width: "100%",
            padding: "0px 0px",
            backgroundColor: "#FFFCF9",
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              textAlign: "center",
              margin: "0px",
              padding: " 60px 30px",
              backgroundColor: "#4C5F6B",
            }}
          >
            <h1 style={{ width: "80%", margin: "auto", color: "#cf751f" }}>
              What is the Spaced Repetition Technique?
            </h1>
            <p
              style={{
                width: "80%",
                margin: " 30px auto 0px",
                fontSize: "18px",

                color: "#B4B8C5",
                lineHeight: "1.5",
              }}
            >
              Typically practiced with physical flash cards, Spaced Repetition
              is an evidence-proven learning technique. Newly introduced and
              more difficult flashcards are shown more frequently while older
              and less difficult flashcards are shown less frequently in order
              to exploit the psychological spacing effect. <br /> Specifically,
              the "spacing effect" refers to the finding that information
              presented over spaced intervals is learned and retained more
              easily and more effectively.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              width: "100%",
              margin: "0px",
              padding: " 60px 30px",
              backgroundColor: "#FFFCF9",
            }}
          >
            <h1 style={{ width: "80%", margin: "auto", color: "#0080a5" }}>
              What is Catalan?
            </h1>
            <p
              style={{
                width: "80%",
                margin: " 30px auto 0px",
                lineHeight: "1.5",
                color: "#383738",
                fontSize: "18px",
              }}
            >
              Catalan is a Western Romance language derived from Vulgar Latin
              and named after the medieval Principality of Catalonia, in
              northeastern Spain. It is the co-official language of the Spanish
              autonomous communities of Catalonia, Valencia and Balearic Islands
              and the only official language of Andorra.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              color: "#FFFFFC",
              margin: "0px ",
              padding: " 60px 30px 35px",
              backgroundColor: "#4C5F6B",
            }}
          >
            <h1 style={{ width: "80%", margin: "auto", color: "#B4B8C5" }}>
              Ready to get started?
            </h1>{" "}
            <h2
              style={{
                width: "80%",
                margin: " 30px auto 0px",
                color: "#cf751f",
              }}
            >
              Sign Up Below
            </h2>
            <button className="down-button" onClick={this.handleClickFocus}>
              ˅
            </button>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            padding: "50px 30px",
            backgroundColor: "#FFFCF9",
            marginBottom: "30px",
          }}
        >
          <h2 className="RR_header">Sign up</h2>

          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>
        <div ref={this.SignUpFocus}></div>
      </section>
    );
  }
}

export default RegistrationRoute;
