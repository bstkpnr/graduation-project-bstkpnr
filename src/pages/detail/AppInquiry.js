import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import firebase from "../../data/config";
import { useHistory, Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";

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
    if (!chilData) {
      alert("Bu sorgu mevcut");
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
          <input type="submit" onClick={onSubmit} />

          <Link to="/create-incident"   ><AiTwotoneHome size={'50'} style={ {color:'#224957'}}/> </Link>

        </Form>
      </Container>
    </>
  );
}
