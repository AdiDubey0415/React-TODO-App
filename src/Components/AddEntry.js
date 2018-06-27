import React, { Component } from "react";

const AddEntry = props => {
  return (
    <div>
      <label>{props.editState? "Edit Entry" : "Add Entry"}</label>
      <input
        type="text"
        value={props.entryValue}
        onChange={e => props.changeAddValue(e.target.value)}
      />
      <input
        type="text"
        value={props.deadLine}
        onChange={e => props.ChangeDead(e.target.value)}
      />
      {props.editState ? (
        <button onClick={props.editEntry}>Edit Entry</button>
      ) : (
        <button
          onClick={() => props.addEntry(props.entryValue, props.deadLine)}
        >
          Add Entry
        </button>
      )}
    </div>
  );
};

export default AddEntry;
