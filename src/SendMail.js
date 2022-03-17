import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import {closeSendMessage} from "./features/mailSlice"
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';



function SendMail() {
  const { register, handleSubmit, watch , errors } = useForm();
  const dispatch = useDispatch();


  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add(
      {
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),

    }
    );
    dispatch(closeSendMessage());
  };
 
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"/>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="To" type="email"
         {...register("to", {
    required: true
  })}/>

       

        <input placeholder="Subject" type="text" 
        {...register("subject", {
    required:  <p>error message</p> 
  })}
  />

        <input  placeholder="Message...."  type="text" className="sendMail__message"
        {...register("message", {
    required: true
  })}
   />

        <div className="sendMail__options">
          <Button 
          className="sendMail__send"
          variant="contained"
          color="primary"
          type="submit">
             Send
            </Button>

          </div>
      </form>
         </div>

    
      
  );
}

export default SendMail;