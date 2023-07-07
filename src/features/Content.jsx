import React from 'react';
import Item from '@components/Item';

function Content({ friendDataList = [], setOpenModal, setIsEdit ,setFriendDataList,setCurId,deleteDataHandler}) {
  return (
    <div className="rounded border border-b-0 border-gray-300">
      {friendDataList?.map((friendData) => (
        <Item
          key={friendData?.id}
          friendData={friendData}
          setFriendDataList={setFriendDataList}
          deleteItem={() => {
            setCurId(friendData?.id)
            deleteDataHandler(friendData?.id)
          }}
          editItem={() => {
            setCurId(e=>friendData?.id)
            setOpenModal(true);
            setIsEdit(true);
            console.log('function edit');
          }}
        />
      ))}
    </div>
  );
}

export default Content;
