import React, { useState } from "react";

const Crudoperation= () => {
  const [ims, setIMS] = useState({
    ID: "",
    Name: "",
    Address: "",
    Age: "",
  });

  const [newdata, setNewdata] = useState([]);
  const [isEdit, setIsedit] = useState(false); // first ma submit dekhaune ..

  const handleClicked = () => {
    const { ID, Name, Address, Age } = ims; //destructing methods that takes the value of ims as a object data

    if (ims.ID && ims.Address && ims.Age && ims.Name) {
      if (newdata.some((items) => items.ID == ID)) {
        //to validate if previous ID is already exist
        alert("ID Already Exist, ID Should be Unique");
      } else {
        setNewdata([...newdata, ims]);
        setIMS({
          ID: "",
          Name: "",
          Address: "",
          Age: "",
        });
      }
    } else {
      alert("please fill all the fields");
    }
  };
  const handleEdit = (id) => {
    const edit = newdata.find((value) => value.ID == id);
    if (edit != undefined) {
      setIMS({
        ID: edit.ID,
        Name: edit.Name,
        Address: edit.Address,
        Age: edit.Age,
      });
    }
    setNewdata([ims]);
    setIsedit(true);
  };
  const handleUpdateEdit = () => {
    handleEdit();
    setIsedit(false);
    setIMS({
      ID: "",
      Name: "",
      Address: "",
      Age: "",
    });
  };
  const handleDelete = (id) => {
    const deletes = newdata.filter((value) => value.ID != id);
    setNewdata(deletes);
  };
  return (
    <div className="flex justify-around mt-4 ">
      <div className="w-1/3">
        <div className="flex flex-col gap-6 p-8 rounded-lg bg-blue-500 shadow-lg">
          <h1 className="text-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 font-bold mb-4 bg-clip-text text-transparent text-center">
            Information Management System
          </h1>
          <label className=" text-xl font-semibold text-white" htmlFor="id">
            ID
          </label>
          <input
            className="rounded-lg h-8 px-2"
            value={ims.ID}
            onChange={(event) => setIMS({ ...ims, ID: event.target.value })}
            placeholder="ID"
            type="number"
            required
          />

          <label className=" text-xl font-semibold text-white" htmlFor="Name">
            Name
          </label>
          <input
            className="rounded-lg h-8 px-2"
            value={ims.Name}
            onChange={(event) => setIMS({ ...ims, Name: event.target.value })}
            placeholder="Name"
            type="text"
            required
          />

          <label
            className=" text-xl font-semibold text-white"
            htmlFor="Address"
          >
            Address
          </label>
          <input
            className="rounded-lg h-8 px-2"
            value={ims.Address}
            onChange={(event) =>
              setIMS({ ...ims, Address: event.target.value })
            }
            placeholder="Address"
            type="text"
            required
          />

          <label className=" text-xl font-semibold text-white" htmlFor="age">
            Age
          </label>
          <input
            className="rounded-lg h-8 px-2"
            value={ims.Age}
            onChange={(event) => setIMS({ ...ims, Age: event.target.value })}
            placeholder="Age"
            type="number"
            required
          />
          <div className="flex justify-center">
            {isEdit ? (
              <button
                className="rounded-lg bg-green-500 text-white font-semibold w-1/2 px-2 py-1 text-xl"
                onClick={handleUpdateEdit}
              >
                UpdateEdit
              </button>
            ) : (
              <button
                className="rounded-lg bg-green-500 text-white font-semibold w-1/2 px-2 py-1 text-xl"
                onClick={handleClicked}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="bg-gray-200 shadow-lg border border-gray-300 w-full p-2">
          <h1 className="text-center font-semibold text-xl">
            List of register users
          </h1>
        </div>

        <table className="table-auto w-full">
          <thead>
            <tr className="border border-gray-200 text-lg">
              <th className="text-left p-4">S.NO</th>
              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Address</th>
              <th className="text-left p-4">Age</th>
              <th className="text-center p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {newdata.map((items, index) => (
              <tr className="border border-gray-200" key={index}>
                <td className="text-lg text-left p-4">{index + 1}</td>
                <td className="text-lg text-left p-4">{items.ID}</td>
                <td className="text-lg text-left p-4">{items.Name}</td>
                <td className="text-lg text-left p-4">{items.Address}</td>
                <td className="text-lg text-left p-4">{items.Age}</td>
                <td className="flex justify-around mt-2">
                  <button
                    className="bg-green-500 rounded-lg p-2 text-xl"
                    onClick={() => handleEdit(items.ID)}
                  >
                    edit
                  </button>
                  <button
                    className="bg-red-500 rounded-lg text-xl p-2"
                    onClick={() => handleDelete(items.ID)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crudoperation;
