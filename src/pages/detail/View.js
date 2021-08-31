import React, { useState, useEffect } from "react";
import firebase from "../../data/config";
import {useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function View() {
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
              <Link to='/basvuru-list' style={{textDecoration: 'none'}} >
                  <button type="submit">Go Back</button>
              </Link>

</Container>

      </div>
}
