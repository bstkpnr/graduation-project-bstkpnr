import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Container } from "react-bootstrap";
import HeaderLogin from "../header/HeaderLogin";
import firebase from "../../data/config";
import * as yup from "yup";
import "./styles.css";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().min(18).max(100),
  tcNo: yup
    .number()
    .required()
    .integer()
    .test(
      "is positive ?",
      "TCNO 11 BASAMAKLI FAZLA VEYA AZ OLAMAZ..",
      (val) => !val || (val && val.toString().length === 11)
    ),
  adress: yup.string().required(),
  messages: yup.string().min(30).required(),
});

export default function App() {

  const [formVisibility, setFormVisibility] = useState(true);
  const [thanksVisibility, setThanksVisibility] = useState(false);
  const [code, setCode] = useState("");
  const [data, setData] = useState({});
  const { id } = useParams();
  // useEffect(() => {
  //   firebase
  //     .database()
  //     .ref()
  //     .child("ticket")
  //     .on("value", (snapshot) => {
  //       if (snapshot.val() !== null) {
  //         setData({
  //           ...snapshot.val(),
  //         });
  //       } else {
  //         snapshot({});
  //       }
  //     });
  // }, [id]);
  // useEffect(() => {
  //   if (id) {
  //     setData({ ...data[id] });
  //   } else {
  //     setData({ ...SignupSchema });
  //   }
  //   return () => {
  //     setData({ ...SignupSchema });
  //   };
  // }, [id, data]);


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (e) => {
    let ref1 = firebase.database().ref().child("ticket").push();
    // alert(`${ref1.key},"Bu referans numarası ile başvuru kontrol et"`);
    ref1.set(e);

    setCode(ref1.key);
    setFormVisibility(false);
    setThanksVisibility(true);

  };
  
 
  // const handleChange = (e) => {
  //   let updateRef = firebase.database().ref().child("ticket").push().key;
  //   const updates={};
  //   updates[ '/ticket/'+updateRef]=SignupSchema;

  //   // alert(`${ref1.key},"Bu referans numarası ile başvuru kontrol et"`);
  //   return firebase.database().ref().update(updates);}

  // const updateUserDetails = (id,detail) => {
  //   firebase
  //     .database()
  //     .ref("ticket" + id)
  //     .update({
  //       detail: SignupSchema
  //     });
  // };
  return (
    <>
      <HeaderLogin />
      {formVisibility && (
        <Container
          fluid
          style={{ backgroundColor: "#8899", height: "80vh", width: "50vw" }}
          className="shadow-lg p-3 mb-5  rounded"
        >
          <div className="text-center">
            <h2 className="text-white">Başvuru Formu</h2>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)}  >
            <div className="mb-2">
              <Form.Control onChange={setValue}
                {...register("firstName" || " ")}
                placeholder="First Name"
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div className="mb-2">
              <Form.Control onChange={setValue}
                {...register("lastName" || " " )}
                placeholder="Last Name"

              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <div className="mb-2">
              <Form.Control onChange={setValue}
                type="number"
                {...register("age" || " " , { valueAsNumber: true })}
                placeholder="Age"

              />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
            <div className="mb-2">
              <Form.Control
                type="number"
                {...register("tcNo" || " ", { valueAsNumber: true })}
                placeholder="TC NO"

              />
              {errors.age && <p>{errors.age.message}</p>}
            </div>
            <div className="mb-2">
              <Form.Control onChange={setValue}
                {...register("adress" || " " )}
                placeholder="Adress"

              />
              {errors.adress && <p>{errors.adress.message}</p>}
            </div>
            <div className="mb-2">
              <Form.Control onChange={setValue}
                as="textarea"
                rows={4}
                {...register("messages" || " ")}
                placeholder="Message"

              />
              {errors.messages && <p>{errors.messages.message}</p>}
            </div>
            <input type="submit" value={id ? "Update" : "Save"}  />
          </Form>
        </Container>
      )}
      {thanksVisibility && (
        <Container
          className="shadow-lg p-3 mb-5 bg-white  rounded"
          style={{ height: "50vh", width: "30vw" }}
        >
          <div className="text-center align-self">
            <h2 className="mb-2 text-center">
              TEŞEKKÜRLER BAŞVURUNUZ ALINMIŞTIR
            </h2>
            <h3>Başvuru Kodunuz</h3>
            <h4 className="">{code}</h4>
            
          </div>
        </Container>
      )}
    </>
  );
}
