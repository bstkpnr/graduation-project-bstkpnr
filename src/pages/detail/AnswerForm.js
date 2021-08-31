import React, { useState, useEffect } from "react";
import firebase from "../../data/config";
import {useParams, Link,  } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

export default function AnswerForm() {
  const [data, setData] = useState("");

  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    firebase
      .database()
      .ref(`ticket/${id}`)
      .get()
      .then((snap) => {
        if (snap.exists()) {
          setUser({ ...snap.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);
  console.log("user",user);

  let chilData;
  const onSubmit = (e) => {
    let ref1 = firebase.database().ref("ticket");
    ref1.on("value", (snap) => {
      snap.forEach((chilSnap) => {
        chilData = chilSnap.val();
      });
      if (chilData) {
      }
    });

    // alert(`${ref1.key},"Bu referans numarası ile başvuru kontrol et"`);
  }

  return <div className="py-5">
    
          <Container className="shadow-lg p-3 mb-5 bg-white rounded" style={{height: "60vh" }}>
              <strong>ID:</strong>
              <span>{id}</span>
              <br/>
              <br/>
              <strong>First Name:</strong>
              <span>{user.firstName}</span>
              <br/>
              <br/>
              <strong>Last Name :</strong>
              <span>{user.lastName}</span>
              <br/>
              <br/>
              <strong>TC :</strong>
              <span>{user.tcNo}</span>
              <br/>
              <br/>
              <strong>Adress :</strong>
              <span>{user.adress}</span>
              <br/>
              <br/>
              <strong>Message :</strong>
              <span>{user.messages}</span>
              <br/>
              <br/>
              <Form onSubmit={onSubmit}>

              <Form.Control 
                as="textarea"
                rows={4}
                onChange={(e) => setData(e.target.value)}
                placeholder="Answer"
                
                />
                </Form>
              <Link to='/basvuru-analiz' style={{textDecoration: 'none'}} >
              <button type="submit" onClick={onSubmit} >Submit</button>
              </Link>

</Container>

      </div>
}
