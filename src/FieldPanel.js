import React, { Fragment } from "react";

const createFormElement = function createFormElement(spf, props) {
  const fFunc = (f, props) => {
    if (f.fieldType === "textbox") {
      return <input
        key={"txt" + f.fieldName}
        type="text"
        id={f.fieldName}
        name={f.fieldName}
        onChange={props.OnTextChanged}
      ></input>;
    } else if (f.fieldType === "numericbox") {
        return <input
        key={"txt" + spf.fieldName}
        type="number"
        id={f.fieldName}
        name={f.fieldName}
        onChange={props.OnNumericChanged}
      ></input>;
    } else if (f.fieldType === "datebox") {
        return <input
        key={"txt" + f.fieldName}
        type="date"
        id={f.fieldName}
        name={f.fieldName}
        onChange={props.OnDateChanged}
      ></input>;
    } else {
        return <input
        key={"txt" + f.fieldName}
        type="text"
        id={f.fieldName}
        name={f.fieldName}
        onChange={props.OnTextChanged}
      ></input>;
    }
  };
  return (
    <Fragment key={spf.fieldName}>
      <label key={"lbl" + spf.fieldName} for={spf.fieldName}>
        {spf.fieldLabel}
      </label>
      {fFunc(spf,props)}      
      <br></br>
    </Fragment>
  );
};

function FieldPanel(props) {
  return (
    <form>
      <div>
        {props.selectedFieldList !== null
          ? props.selectedFieldList.map((spf) => {
              return createFormElement(spf, props);
            })
          : () => {
              return <></>;
            }}
      </div>
    </form>
  );
}

export default FieldPanel;
