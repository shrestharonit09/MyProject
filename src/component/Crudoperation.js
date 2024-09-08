import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Crudoperation = () => {
  const [ims, setIMS] = useState({
    ID: "",
    Name: "",
    Address: "",
    Age: "",
    Image: "",
  });

  const [newdata, setNewdata] = useState([]);
  const [isEdit, setIsedit] = useState(false); // first ma submit dekhaune ..
  const [cards, setCard] = useState();
  const [showcard, setShowcard] = useState(false);

  useEffect(() => {
    if (ims.Image && ims.Image instanceof Blob) {
      setIMS((prevdata) => ({
        ...prevdata,
        Image: URL.createObjectURL(ims.Image),
      }));
      return () => {
        URL.revokeObjectURL(URL.createObjectURL(ims.Image));
      };
    }
  }, [ims.Image]);

  const handleClear = () => {
    setIMS({
      ID: "",
      Name: "",
      Address: "",
      Age: "",
      Image: "",
    });
  };

  const handleClicked = () => {
    const { ID, Name, Address, Age, Image } = ims; //destructing methods that takes the value of ims as a object data
    if (ID && Address && Age && Name && Image) {
      if (newdata.some((items) => items.ID === ID)) {
        alert("ID Already Exist, ID Should be Unique");
      } else {
        setNewdata([...newdata, ims]);
        handleClear();
      }
    } else {
      alert("please fill all the fields");
    }
  };
  const handleEdit = (id) => {
    const edit = newdata.find((value) => value.ID === id);
    if (edit !== undefined) {
      setIMS({
        ID: edit.ID,
        Name: edit.Name,
        Address: edit.Address,
        Age: edit.Age,
        Image: edit.Image,
      });
    }
    setNewdata((previousdata) =>
      previousdata.map((item) => (item.ID === ims.ID ? ims : item))
    );
    setIsedit(true);
  };
  const handleUpdateEdit = () => {
    handleEdit();
    setIsedit(false);
  };
  const handleDelete = (id) => {
    const deletes = newdata.filter((value) => value.ID !== id);
    setNewdata(deletes);
  };
  const handleView = (id) => {
    const user = newdata.find((value) => value.ID === id);
    setCard(user);
    setShowcard(!showcard);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center">
        <div className="flex flex-col gap-8 mt-8">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's fill the form to generate the individual card. Happy coding!!!
          </h1>
          <div className="flex justify-center">
            <div className="flex flex-col gap-4 p-4 rounded-lg shadow-lg bg-white border border-white">
              <h1 className="text-3xl bg-gradient-to-r from-teal-400 via-blue-500 to-blue-700 font-bold mb-4 bg-clip-text text-transparent text-center mt-4">
                Identity Card
              </h1>
              <input
                className="rounded-lg p-2 border border-gray-300"
                value={ims.ID}
                onChange={(event) => setIMS({ ...ims, ID: event.target.value })}
                placeholder="ID"
                type="number"
                required
              />
              <input
                className="rounded-lg p-2 border border-gray-300"
                value={ims.Name}
                onChange={(event) =>
                  setIMS({ ...ims, Name: event.target.value })
                }
                placeholder="Name"
                type="text"
                required
              />
              <input
                className="rounded-lg p-2 border border-gray-300"
                value={ims.Address}
                onChange={(event) =>
                  setIMS({ ...ims, Address: event.target.value })
                }
                placeholder="Address"
                type="text"
                required
              />
              <input
                className="rounded-lg p-2 border border-gray-300"
                value={ims.Age}
                onChange={(event) =>
                  setIMS({ ...ims, Age: event.target.value })
                }
                placeholder="Age"
                type="number"
                required
              />
              {ims.Image ? (
                <div className="flex justify-center items-center">
                  <img
                    className="h-16 w-16 rounded-lg shadow-lg"
                    src={ims.Image}
                    alt="UserKoImage"
                  />
                </div>
              ) : (
                ""
              )}
              <input
                className="border border-gray-300 p-2 rounded-lg"
                type="file"
                onChange={(event) =>
                  setIMS({ ...ims, Image: event.target.files[0] })
                }
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
                    className="rounded-lg bg-blue-500 text-white font-semibold w-1/2 px-2 py-1 text-xl mb-4 hover:bg-blue-600"
                    onClick={handleClicked}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-blue-500 shadow-lg rounded-t-lg w-full p-2 flex justify-center">
              <h1 className="font-semibold text-xl text-white">
                List of register users
              </h1>
            </div>
            <table className="table-auto w-full">
              <thead>
                <tr className="border border-gray-200 bg-white text-lg text-gray-500">
                  <th className="text-left p-4">S.NO</th>
                  <th className="text-left p-4">ID</th>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Address</th>
                  <th className="text-left p-4">Age</th>
                  <th className="text-center p-4">Action</th>
                  <th className="text-center p-4">Image</th>
                </tr>
              </thead>
              <tbody>
                {newdata.map((items, index) => (
                  <tr className="border border-gray-200 bg-white" key={index}>
                    <td className="text-lg text-left p-4">{index + 1}</td>
                    <td className="text-lg text-left p-4">{items.ID}</td>
                    <td className="text-lg text-left p-4">{items.Name}</td>
                    <td className="text-lg text-left p-4">{items.Address}</td>
                    <td className="text-lg text-left p-4">{items.Age}</td>
                    <td className="flex gap-2 mt-2">
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
                      <button
                        className="bg-blue-500 rounded-lg text-xl p-2"
                        onClick={() => handleView(items.ID)}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <img
                          src={items.Image}
                          alt="userimage"
                          className="h-12 w-12 rounded-lg"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {showcard ? (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleView}
          >
            {cards && (
              <Card
                ID={cards?.ID ? cards.ID : "1"}
                Name={cards?.Name ? cards.Name : "Ronit Shrestha"}
                Address={cards?.Address ? cards.Address : "bhaktapur"}
                Age={cards?.Age ? cards.Age : "24"}
                Image={cards?.Image ? cards.Image : ""}
              />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Crudoperation;
