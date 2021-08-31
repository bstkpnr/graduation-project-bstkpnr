import React, { useState,useEffect,useParams } from "react";
import { Container, Form } from "react-bootstrap";
import Header from "../header/Header";
import View from '../detail/View'
import firebase from "../../data/config";
import { useHistory, Link } from "react-router-dom";

export default function AppInquiry() {
  const [data, setData] = useState("");
  let history=useHistory();
  let chilData;

 
  const onSubmit = () => {
    let ref1 = firebase.database().ref("ticket");
    ref1.on("value", (snap) => {
      snap.forEach((chilSnap) => {
        chilData = chilSnap.val();
      });
    });

    console.log(data);
    console.log("BESTE", chilData);
    if (chilData) {
      history.push("Bu sorgu mevcut")
    } else {
      history.push("/basvuru-notFound")
    }
    //Mi36QdPomQhEXbX_dvU
  };
  return (
    <>
      <Container fluid>
        <div className="text-center">
          <h2>Başvuru Sorgula</h2>
        </div>

        <Form onSubmit={onSubmit}>
          <div className="mb-2">
            <Form.Control
              placeholder="Kodu giriniz"
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <input type="submit" onClick={onSubmit} value="Sorgula" />
          <Link to='/create-incident' style={{textDecoration: 'none'}} >
                  <button type="submit">Go Back</button>
              </Link>
        </Form>
      </Container>
    </>
  );
}
