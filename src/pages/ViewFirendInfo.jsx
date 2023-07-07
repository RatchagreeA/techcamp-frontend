import React, { useEffect, useState } from "react";
import CreateUser from "@features/CreateUser";
import Header from "@features/Header";
import Content from "@features/Content";
import Filter from "@features/Filter";
import Modal from "@components/Modal";

const mockFriendDataList = [
  { id: "1", firstName: "test1", lastName: "test1", phone: "0000000000" },
  { id: "2", firstName: "hello", lastName: "hello", phone: "0000000000" },
  { id: "3", firstName: "test1", lastName: "hello", phone: "0000000000" },
];

function ViewFirendInfo() {
  const [friendDataList, setFriendDataList] = useState(mockFriendDataList);
  const [showList, setShowList] = useState(mockFriendDataList);
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [curId, setCurId] = useState("");
useEffect(()=>{
  setShowList(friendDataList)
},[friendDataList])
  const validateData = () => {
    try {
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const getDataByID = () => {
    try {
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const createNewDataHandler = (fname, lname, phone) => {
    try {
      console.log("Create Function");
      // You can write code under this line.
      let id = Math.max(...friendDataList.map(f => parseInt(f.id)))+1
      let dt = {
        id: id.toString(),
        firstName: fname,
        lastName: lname,
        phone: phone,
      };
      setFriendDataList((f) => [...f, dt]);
    } catch (err) {
      // handler error
    }
  };

  const editDataHandler = (fname, lname, phone) => {
    try {
      console.log("Edit Function");
      // You can write code under this line.
      let idx = friendDataList.findIndex( f => f.id == curId)
      friendDataList[idx].firstName = fname;
      friendDataList[idx].lastName = lname;
      friendDataList[idx].phone = phone;
      setFriendDataList(friendDataList);
    } catch (err) {
      // handler error
      console.log(err);
    }
  };

  const deleteDataHandler = (id) => {
    try {
      // You can write code under this line.
      console.log("Delete Function");
      setFriendDataList(f => f.filter(f => f.id !=id))
    } catch (err) {
      // handler error
      console.log(err);
    }
  };

  // optional Bonus point if you can do filter function
  const FilterDataHandler = (txt) => {
    try {
      console.log("Filter Function");
      // do some thing
      console.log(txt)
      if (txt != ""){
        setShowList(e=>e.filter(f=>f.firstName.includes(txt)))
      }else{
        setShowList(friendDataList)
      }
    } catch (err) {
      // handler error
    }
  };

  return (
    <div className="m-20 flex justify-center">
      <div className="flex flex-col justify-center gap-8 ">
        <Header />
        <CreateUser setOpenModal={setOpenModal} />
        <Filter FilterDataHandler={FilterDataHandler}/>
        <Content
          friendDataList={showList}
          setFriendDataList={setFriendDataList}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setIsEdit={setIsEdit}
          setCurId={setCurId}
          deleteDataHandler={deleteDataHandler}
        />
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          isEdit={isEdit}
          friendDataList={friendDataList}
          createNewDataHandler={createNewDataHandler}
          editDataHandler={editDataHandler}
        />
      </div>
    </div>
  );
}

export default ViewFirendInfo;
