import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Admin() {
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    if (userName === "kodluyoruz" && password === "bootcamp109") {
      history.push("/basvuru-list");
    } else {
      alert("KULLANICI BİLGİLERİ HATALI");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <div className="text-center">
        <h2>Admin Girişi</h2>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={validateForm}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
