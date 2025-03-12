import "./App.css";
import { useEffect, useState } from "react";
import red from "./assets/red.jpg";
import purple from "./assets/purple.jpg";
import green from "./assets/green.jpg";
import blue from "./assets/blue.jpg";
import why from "./assets/why.jpg";

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="App">
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f4",
          color: "#333",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(90deg,rgb(88, 42, 205),rgb(239, 52, 67))",
            padding: "50px",
            textAlign: "center",
            color: "#fff",
            borderRadius: "0 0 20px 20px",
            transition: "opacity 1s ease-in-out",
            opacity: fadeIn ? 1 : 0,
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              marginBottom: "15px",
              textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Together, We Build. Together, We Grow.
          </h1>
          <p
            style={{
              fontSize: "24px",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: "0.9",
              lineHeight: "1.6",
            }}
          >
            Code with logic, design with vision, communicate with
            impact—innovation lies at the intersection of technical mastery,
            creative web solutions, and powerful soft skills.
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            background:
            "rgba(235, 12, 60, 0.12)",
            fontFamily: "Arial, sans-serif",
            color: "rgb(243, 72, 72)",
            fontSize: "40px",
            padding: "20px",
            
          }}
        >
          Club Domains
        </div>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            padding: "40px 0",
            color: "#444",
            backgroundColor: "rgba(235, 12, 60, 0.12)",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "rgba(235, 12, 60, 0.91)" }}>
              Web Wizards
            </h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              "Craft stunning websites & build the web, one line of code at a
              time!"
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={red}
              alt="Graph Types"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            padding: "40px 0",
            backgroundColor: "rgba(8, 143, 233, 0.2)",
            color: "#444",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "#36a2eb" }}>Dev Devils</h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              "Automate, deploy, and revolutionize the tech world with DevOps!"
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={blue}
              alt="Dynamic Control"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            padding: "40px 0",
            color: "#444",
            backgroundColor: "rgba(51, 225, 3, 0.15)",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "rgba(13, 216, 16, 0.62)" }}>
              Cybersec Scholars
            </h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              "Secure the digital world & defend against cyber threats!"
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={green}
              alt="Easy to Use"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            padding: "40px 0",
            backgroundColor: "rgba(24, 51, 229, 0.17)",
            color: "#444",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "#8a2be2" }}>AI Avengers</h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              "Master the power of AI & shape the future with intelligent
              solutions!"
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={purple}
              alt="Dynamic Control"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section
          style={{
            alignItems: "center",
            padding: "40px 0",
            color: "#444",
            backgroundColor: "rgba(255, 77, 77, 0.1)",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={why}
              alt="Dynamic Control"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "rgb(255, 51, 51)" }}>
              Why Join Us?
            </h2>

            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <strong
                    style={{
                      fontSize: "19px",
                      color: "rgb(243, 109, 109)",
                      marginTop: "15px",
                    }}
                  >
                    Hands-on Learning:
                  </strong>{" "}
                  Gain practical experience in coding, web development, and soft
                  skills.
                </li>
                <li>
                  <strong
                    style={{
                      fontSize: "19px",
                      color: "rgb(243, 109, 109)",
                      marginTop: "15px",
                    }}
                  >
                    Competitive Edge:
                  </strong>{" "}
                  Enhance your resume with real-world projects and hackathons.
                </li>
                <li>
                  <strong
                    style={{
                      fontSize: "19px",
                      color: "rgb(243, 109, 109)",
                      marginTop: "15px",
                    }}
                  >
                    Leadership & Teamwork:
                  </strong>{" "}
                  Develop leadership skills and collaborate on impactful
                  projects.
                </li>
                <li>
                  <strong
                    style={{
                      fontSize: "19px",
                      color: "rgb(243, 109, 109)",
                      marginTop: "15px",
                    }}
                  >
                    Soft Skills:
                  </strong>{" "}
                  Improve public speaking, teamwork, critical thinking, and
                  problem-solving.
                </li>
                <li>
                  <strong
                    style={{
                      fontSize: "19px",
                      color: "rgb(243, 109, 109)",
                      marginTop: "15px",
                    }}
                  >
                    Exposure to Technologies:
                  </strong>{" "}
                  Stay ahead with the latest trends in AI, ML, and web
                  frameworks.
                </li>
                <li>
                  <strong
                    style={{
                      fontSize: "19px",
                      color: "rgb(243, 109, 109)",
                      marginTop: "15px",
                    }}
                  >
                    Portfolio Building:
                  </strong>{" "}
                  Contribute to open-source projects and build a strong
                  portfolio.
                </li>
                <li>
                  <strong
                    style={{
                      fontSize: "19px",
                      color: "rgb(243, 109, 109)",
                      marginTop: "15px",
                    }}
                  >
                    Innovation & Growth:
                  </strong>{" "}
                  Engage in tech talks, coding challenges, and brainstorming
                  sessions.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <header
          style={{
            backgroundColor: "rgba(255, 77, 77, 0.1)",
            padding: "50px",
            textAlign: "center",
            color: "#fff",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <p
            style={{
              color: "black",
              fontSize: "22px",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: "0.9",
            }}
          >
            We look forward to welcoming you to a community that provides an
            dynamic environment and supports your growth and success.
          </p>
          <p
            style={{
              color: "black",
              fontSize: "16px",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: "0.9",
            }}
          >
            "Don't Just Watch, Be a Part of the Action! 🎯 Register Now!"
          </p>
          <a
            href="https://forms.gle/sRkeXTHjVZHLRdGY6"
            style={{
              display: "inline-block",
              padding: "15px 30px",
              backgroundColor: "rgb(221, 125, 133)",
              color: "#333",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "20px",
              textDecoration: "none",
              transition: "0.3s",
              textAlign: "center",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "rgba(228, 2, 2, 0.71)")
            }
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
          >
            Get Registered
          </a>
        </header>
      </div>

      <footer
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "30px 10px",
          marginTop: "40px",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <div>
          <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>About Me</h2>
          <p style={{ fontSize: "16px", opacity: "0.8" }}>
            Explore our work on WebSite
          </p>
          <a
            href="https://github.com/CSE-TechClub"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#36a2eb",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Visit Club (soon...)
          </a>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>Quick Links</h3>
          <p>
            <a
              href="https://github.com/CSE-TechClub"
              style={{
                color: "#ffce56",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              GitHub
            </a>
            <a
              href=""
              style={{
                color: "#ffce56",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Discord
            </a>
            <a
              href="mailto:csekitclub@gmail.com"
              style={{
                color: "#ffce56",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Gmail
            </a>
            <a
              href="https://discuza.in/login"
              style={{
                color: "#ffce56",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Discuza Forum
            </a>
          </p>
        </div>
        <div style={{ marginTop: "20px", fontSize: "14px", opacity: "0.7" }}>
          &copy; 2025 CSE-TechClub. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
