import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

let renderN = 0;
function Form() {
  const { register, handleSubmit } = useForm();
  renderN++;

  const onSubmit = (data) => console.log(data);

  return (
    <div className="Form" onSubmit={handleSubmit(onSubmit)}>
      <form>
        <div className="user">
          <label>Page Web</label>
          <input type="text" ref={register} name="PaginaWeb" />
        </div>
        <div className="pass">
          <label className="input">Description</label>
          <input className="input1" type="text" ref={register} name="description" />
        </div>
        <p>Render finalization: {renderN}</p>
        <button className="btn-save">Save</button>
      </form>
    </div>
  );
}

export default Form;
