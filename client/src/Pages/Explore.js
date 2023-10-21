import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getDetail } from "../Services/getRequest";
import { notify } from "../Services/toastify";

const Explore = () => {
  const [solver, setSolver] = useState([]);

  const navigate = useNavigate();
  const [investors, setInvestors] = useState([]);

  const [mentor, setMentor] = useState([]);

  useEffect(() => {
    getDetail()
      .then((res) => {
        if (res.data.Success) {
          setInvestors(res.data.Investors);
          setMentor(res.data.Mentors);
          setSolver(res.data.ProblemSolvers);
        } else {
          notify(res.data.Message,"warning");
        }
      })
      .catch((err) => {
        notify(err.response.data.Message,"error");
      });
  }, []);

  return (
    <>
      <Container className="scroll contBlock">
        <Row style={{ marginTop: "3%" }}>
          <Col style={{ marginLeft: "0%" }} className="mobGiff" xs={4} md={1}>
            <img src="customer.gif" height="60px" width="60px"></img>
          </Col>
          <Col xs={5} md={3}>
            <h4 style={{ marginTop: "7%" }}>INVESTORS </h4>
          </Col>
          <Col xs={10} md={8}>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => navigate("/searchInvestor")}
              style={{ marginLeft: "85%" }}
            >
              SEARCH
            </Button>
          </Col>
        </Row>

        <Row
          style={{ marginTop: "2%", height: "400px" }}
          className="overflow-scroll"
        >
          {investors.map((investor) => {
            return (
              <Col xs={12} md={3}>
                <div className="dashboardCard bg-c-white order-card">
                  <div className="card-block">
                    <Row>
                      <Col xs={6}>
                        <Row>
                          <Col  xs={4} sm={4}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              fill="currentColor"
                              class="bi bi-person-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                              />
                            </svg>
                          </Col>
                          <Col xs={12}sm={8}>
                            <h7 className="m-b-10">
                              <strong>{investor.investorName}</strong>
                            </h7>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={6}>
                        <img
                          src="investorCardLogo.png"
                          alt="card logo"
                          height="60px"
                          width="60px"
                        ></img>
                      </Col>
                    </Row>
                    <br></br>
                    <h6 className="text-right">
                      <span>Domain - {investor.interestedDomain}</span>
                    </h6>
                    <br></br>
                    <h6 className="text-right">
                      <spn>
                        Offers -{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        {investor.estimationAmount}
                      </spn>
                    </h6>
                    <br></br>
                    <Button
                      variant="light"
                      onClick={() => {
                        navigate("/approachToPay", {
                          state: {
                            investorName: investor.investorName,
                            intrestedDomain: investor.interestedDomain,
                            estimationAmount: investor.estimationAmount,
                          },
                        });
                      }}
                      size="sm"
                    >
                      <strong>Approach for Pay</strong>
                    </Button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="scroll contBlock">
        <Row style={{ marginTop: "3%" }}>
          <Col style={{ marginLeft: "0%" }} className="mobGiff" xs={4} md={1}>
            <img src="idea.gif" height="60px" width="60px"></img>
          </Col>
          <Col xs={5} md={3}>
            <h4 style={{ marginTop: "7%" }}>SOLUTION PROVIDER </h4>
          </Col>
          <Col xs={10} md={8}>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => navigate("/searchProblemSolutions")}
              style={{ marginLeft: "85%" }}
            >
              SEARCH
            </Button>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "2%", height: "400px" }}
          className="overflow-scroll"
        >
          {solver.map((sol) => {
            return (
              <Col xs={12} md={3}>
                <div className="dashboardCard bg-c-white order-card scroll">
                  <div className="card-block">
                    <Row>
                      <Col xs={6}>
                        <Row>
                          <Col sm={4}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              fill="currentColor"
                              class="bi bi-person-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                              />
                            </svg>
                          </Col>
                          <Col sm={8}>
                            <h7 className="m-b-20">
                              <strong>{sol.solutionProvider}</strong>
                            </h7>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={6}>
                        <img
                          src="ideaCardLogo.png"
                          alt="card logo"
                          height="50px"
                          width="50px"
                        ></img>
                      </Col>
                    </Row>
                    <h6 className="text-right">
                      <span>Domain - {sol.problemDomain}</span>
                    </h6>
                    <br></br>
                    <h6 className="text-right">
                      <span>{sol.problemKeyword}</span>
                    </h6>
                    <br></br>
                    <h6 className="text-right">
                      <span>
                        Estimation -{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>{" "}
                        {sol.problemEstimatedCost}
                      </span>
                    </h6>
                    <br></br>
                    {sessionStorage.getItem("userType") === "Investor" ? (
                      <Button variant="light" size="sm">
                        <strong>Ready to Pay</strong>
                      </Button>
                    ) : (
                      <Button variant="light" size="sm">
                        <strong>To Connect</strong>
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="scroll contBlock">
      <Row style={{ marginTop: "3%" }}>
          <Col style={{ marginLeft: "0%" }} className="mobGiff" xs={4} md={1}>
            <img src="mentor.gif" height="60px" width="60px"></img>
          </Col>
          <Col xs={5} md={3}>
            <h4 style={{ marginTop: "7%" }}>MENTORS </h4>
          </Col>
          <Col xs={10} md={8}>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => navigate("/serachMentors")}
              style={{ marginLeft: "85%" }}
            >
              SEARCH
            </Button>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "2%", height: "300px" }}
          className="overflow-scroll"
        >
          {mentor.map((ment) => {
            return (
              <Col xs={12} md={3}>
                <div className="dashboardCard bg-c-white order-card">
                  <div className="card-block">
                  <Row>
                      <Col xs={6}>
                        <Row>
                          <Col sm={4}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              fill="currentColor"
                              class="bi bi-person-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                              />
                            </svg>
                          </Col>
                          <Col sm={8}>
                          <h7 className="m-b-20">
                      <strong>{ment.mentorName}</strong>
                    </h7>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={6}>
                        <img
                          src="mentorCardLogo2.png"
                          alt="card logo"
                          height="50px"
                          width="50px"
                        ></img>
                      </Col>
                    </Row>
                    <h6 className="text-right">
                      <span>Domain - {ment.mentorDomain}</span>
                    </h6>
                    <br></br>
                    <h6 className="text-right">
                      <span>Experience - {ment.mentorExperience}</span>
                    </h6>
                    <br></br>
                    <Button
                      variant="light"
                      onClick={() => {
                        navigate("/approachToMentor", {
                          state: {
                            mentorName: ment.mentorName,
                            mentorDomain: ment.mentorDomain,
                            mentorExperiance: ment.mentorExperience,
                          },
                        });
                      }}
                      size="sm"
                    ><strong>Make Mentor</strong>
                      
                    </Button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Explore;
