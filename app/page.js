"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState(""); //this is 2 way binding
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault(); // this will stop form from reloading as soon as we submit the form(which is the default behaviour)
    // console.log(title);
    // console.log(desc);
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center mb-5">
          <div className="flex justify-between items-center w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text 5xl font-bold text-center">
        To do list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Add title"
          value={title}
          onChange={(e) => {
            // console.log(e.target.value);
            settitle(e.target.value); //this is 2 way binding
          }}
        ></input>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>
        <button className="bg-black text-white px-4 py-2 text-2xl rounded m-5">
          Add task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
