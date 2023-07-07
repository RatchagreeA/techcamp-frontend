import React from "react";
import { useState } from "react";

export default function Modal(props) {
  const { friendDataObj, openModal, setOpenModal, isEdit, errorMessage,createNewDataHandler, editDataHandler} =
    props;
  const [fname, setFname] = useState(friendDataObj?.firstName);
  const [lname, setLname] = useState(friendDataObj?.lastName);
  const [phone, setPhone] = useState(friendDataObj?.phone);

  const onChangeHandler = (f, l, p) => {
    setFname(f);
    setLname(l);
    setPhone(p);
  };

  const closeModalHandler = () => {
    // You can write code under this line.
    setFname("");
    setLname("");
    setPhone("");
    setOpenModal(false);
  };

  const submitModalHandler = () => {
    // You can write code under this line.
    if (isEdit ){
      console.log("edit")
      editDataHandler(fname,lname,phone) 
    }else{
      console.log("create")
      createNewDataHandler(fname,lname,phone) 
    }
    setOpenModal(false);
    setFname("");
    setLname("");
    setPhone("");
  };

  return (
    <>
      {openModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-1/3 max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold">
                    {isEdit ? "Edit Friend Phone" : "Create Friend Info"}
                  </h3>
                </div>
                <div className="relative flex-auto p-6">
                  <form className="w-full space-y-6">
                    <input
                      type="text"
                      name="firstName"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="First name"
                      onChange={(e) => {
                        let f = e.target.value;
                        let l=lname;
                        let p=phone;
                        onChangeHandler(f,l,p)
                      }}
                      value={fname}
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      onChange={(e) => {
                        let f = fname;
                        let l=e.target.value;
                        let p=phone;
                        onChangeHandler(f,l,p)
                      }}
                      value={lname}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      onChange={(e) => {
                        let f = fname;
                        let l=lname;
                        let p=e.target.value;
                        onChangeHandler(f,l,p)
                      }}
                      value={phone}
                      required
                    />
                    {errorMessage && (
                      <p
                        id="filled_error_help"
                        class="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        {errorMessage}
                      </p>
                    )}
                  </form>
                </div>
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="mb-1 mr-1 w-1/2 rounded bg-red-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={closeModalHandler}
                  >
                    Close
                  </button>
                  <button
                    className="mb-1 mr-1 w-1/2 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={submitModalHandler}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
