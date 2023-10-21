import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";
import { addProblems } from "../Services/postRequest";
import { notify } from "../Services/toastify";

const AddSolutions = () => {
  const username = sessionStorage.getItem("username");
  const [spinner, setSpinner] = useState(false);
  const [solutionDetail, setSolutionDetail] = useState({
    solutionProvider: username,
    problemDomain: "",
    problemEstimatedCost: "",
    problemDuration: "",
    problemStatement: "",
    problemKeyword: "",
    employeeRequirment: "",
    completedPercentage: "",
    status: "",
    Investor: "",
    Mentor: "",
  });
  const OnHandleChange = (event) => {
    const { name, value } = event.target;
    setSolutionDetail({ ...solutionDetail, [name]: value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setSpinner(true);
    console.log(solutionDetail);
    addProblems(solutionDetail).then((res) => {
        if(res.data.Success){
          notify(res.data.Message, "success");
          setSpinner(false);
          setSolutionDetail({
            solutionProvider: username,
            problemDomain: "",
            problemEstimatedCost: "",
            problemDuration: "",
            problemStatement: "",
            problemKeyword: "",
            employeeRequirment: "",
            completedPercentage: "",
            status: "",
            Investor: "",
            Mentor: "",
          });
        } else {
          notify(res.data.Message, "warning");
          setSpinner(false);
        }
      })
      .catch((err) => {
        notify(err.response.data.Message, "error");
        setSpinner(false);
      })
      .finally(() => {
        setSpinner(false);
      });
  };
  return (
    <>
      <Container>
        <h1 style={{ marginTop: "3%", textAlign: "center" }}>
          <bold>Upload Problem</bold>
        </h1>
        <Card>
          <Form style={{ marginTop: "3%" }} onSubmit={onHandleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} style={{ textAlign: "center" }}>
                <strong>Problem Domain</strong>
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  as="select"
                  value={solutionDetail.problemDomain}
                  aria-label="Default select example"
                  name="problemDomain"
                  onChange={OnHandleChange}
                >
                  <option>Domains</option>
                  <option value="Healthcare">Health Care</option>
                  <option value="WebDevelopment">Web Development</option>
                  <option value="MobileAppDevelopment">
                    Mobile App Development
                  </option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} style={{ textAlign: "center" }}>
                <strong>Problem Estimated Cost</strong>
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="number"
                  value={solutionDetail.problemEstimatedCost}
                  name="problemEstimatedCost"
                  onChange={OnHandleChange}
                  placeholder="Enter The Estimated Cost of Your Idea"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} style={{ textAlign: "center" }}>
                <strong>Duration of Completion</strong>
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="number"
                  value={solutionDetail.problemDuration}
                  name="problemDuration"
                  onChange={OnHandleChange}
                  placeholder="Enter Duration for Your Idea in Months"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} style={{ textAlign: "center" }}>
                <strong>Problem Keyword</strong>
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  value={solutionDetail.problemKeyword}
                  name="problemKeyword"
                  onChange={OnHandleChange}
                  placeholder="Enter Your Problem keyword"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} style={{ textAlign: "center" }}>
                <strong>Problem Statement</strong>
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  name="problemStatement"
                  value={solutionDetail.problemStatement}
                  onChange={OnHandleChange}
                  as="textarea"
                  placeholder="Enter The Problem Statement of Your Idea"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4} style={{ textAlign: "center" }}>
                <strong>Employee Requirment</strong>
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="number"
                  value={solutionDetail.employeeRequirment}
                  name="employeeRequirment"
                  onChange={OnHandleChange}
                  placeholder="Enter The No of Employee Required"
                  required
                />
              </Col>
            </Form.Group>
            <Row className="mb-3">
              <Col style={{ textAlign: "center" }}>
                {spinner ? (
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Adding...
                  </button>
                ) : (
                  <Button variant="primary" type="submit">
                    Proceed To Add
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </Card>
        <Row style={{ marginTop: "4%" }}>
          <Col>
            <hr
              style={{ border: "3px solid #004E9B", borderRadius: "5px" }}
            ></hr>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddSolutions;
