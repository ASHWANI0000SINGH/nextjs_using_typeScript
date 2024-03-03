// Importing 'useEffect' to demonstrate dynamic rendering of table rows.
"use client";
import React, { useState, useEffect } from "react";

const Hobbies = () => {
  const [hobby, setHobby] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("checked", checked);

    if (hobby.trim() !== "") {
      setHobbies((prevHobbies) => [...prevHobbies, hobby]);
      setHobby("");
    }
  };

  // useEffect(() => {
  //   console.log(hobbies);
  // }, [hobbies]);

  const deleteHobby = (index: number) => {
    if (checked) {
      const updatedData = [...hobbies];
      updatedData.splice(index, 1);
      setHobbies(updatedData);
    } else {
      alert("please select check box");
    }

    setChecked(false);
  };

  return (
    <>
      <h1 className="text-center font-bold text-black-500 text-5xl dark:text-white mt-5">
        {" "}
        Hobbies
      </h1>
      <div className="flex  flex-row justify-evenly m-10 p-10 border-2">
        <div className=" border-2">
          <form action="" onSubmit={formSubmitHandler}>
            <input
              type="text"
              placeholder="Hobby"
              className="bg-gray-50 border border-gray-300 text-gray-900 m-3 p-2"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
            <br />
            <button type="submit" className="bg-orange-500 p-1  m-3  ">
              Submit
            </button>
          </form>
        </div>
        {hobbies.length !== 0 && (
          <>
            <div>
              <table>
                <thead>
                  <tr className="border-2 m-10">
                    <th className="border-2 p-1  m-1"> Hobby Name</th>
                    <th className="border-2 p-1 m-1"> Check Box</th>
                    <th className="border-2  p-1 m-1"> Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {hobbies.map((h, index) => (
                    <tr key={index} className="border-2 text-center">
                      <td className="border-2 text-center p-1">{h}</td>
                      <td className="border-2 text-center p-1">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          onChange={() => setChecked(!checked)}
                        />
                      </td>
                      <td className="border-2 text-center p-1">
                        {/* <button>Delete</button> */}
                        <button
                          onClick={() => deleteHobby(index)}
                          className="m-auto"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Hobbies;
