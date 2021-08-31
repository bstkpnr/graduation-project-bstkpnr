import React, { useState, useEffect } from "react";
import firebase from "../../data/config";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { BsPencilSquare, BsFillTrashFill, BsEyeFill } from "react-icons/bs";
import { Container, Table } from "react-bootstrap";
export default function ListRecord() {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref()
      .child("ticket")
      .on("value", (snapshot) => {
        if (snapshot.val() !== null) {
          setData({
            ...snapshot.val(),
          });
        } else {
          snapshot({});
        }
      });
  }, []);
  const onDelete = (id) => {
    if (window.confirm("Silmek istediğine emin misin?")) {
      firebase
        .database()
        .ref()
        .child(`ticket/${id}`)
        .remove((err) => {
          if (err) {
            console.log(err);
          }
        });
    }
  };
  return (
    <>
      <Header />
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h2 className="display-2 text-white">Başvurular</h2>
            </div>
            <Table striped bordered hover variant="dark">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Key</th>

                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">TC No</th>
                  <th scope="col">Adress</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].firstName}</td>
                      <td>{data[id].lastName}</td>
                      <td>{data[id].age}</td>
                      <td>{data[id].tcNo}</td>
                      <td>{data[id].adress}</td>
                      <Link to={`/update/${id}`}>
                        <a className="btn text-primary" style={{width:'5vw', height:'5vh',}}>
                          <BsPencilSquare />
                        </a>
                      </Link>
                      <a
                        className="btn text-danger"
                        style={{width:'5vw', height:'5vh',}}
                        onClick={() => onDelete(id)}
                      >
                        <BsFillTrashFill />
                      </a>
                      <Link to={`/view/${id}`}>
                        <a className="btn text-info" style={{width:'5vw', height:'5vh',}}>
                          <BsEyeFill />
                        </a>
                      </Link>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
}
