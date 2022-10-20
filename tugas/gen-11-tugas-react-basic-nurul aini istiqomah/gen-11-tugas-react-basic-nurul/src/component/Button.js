import React from "react";

function Button(props) {
  return (
    <>
      <div className="justify-center inline-block">
        <button
          type="button"
          onClick={props.handleClick}
          className="text-white bg-slate-500 hover:bg-slate-400  font-semibold rounded-md text-sm text-center p-2 m-2"
        >
          {props.buttonName}
        </button>
      </div>
    </>
  );
}

export default Button;