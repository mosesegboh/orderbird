import React, {useRef, useEffect, useState} from 'react';
import Sorter from './Sorter';
import Modal from './Modal';

function User(props) {
  const [PopUp,setPopUp] = useState(false)
  const [currentPopData,setCurrentPopData] = useState({})
  const { users, setUsers} = props;

  const sort = (sortCriteria, sortDirection) => {
    const sortedUserList = [...users]
    switch(sortCriteria){
      case 'firstName':
        sortedUserList.sort((a,b) => a.first_name.localeCompare(b.first_name))
        sortDirection === 'desc' && sortedUserList.reverse()
        break;
      case 'lastName':
        sortedUserList.sort((a,b) => a.last_name.localeCompare(b.last_name))
        sortDirection === 'desc' && sortedUserList.reverse()
        break;
      case 'email':
        sortedUserList.sort((a,b) => a.email.localeCompare(b.email))
        sortDirection === 'desc' && sortedUserList.reverse()
        break;
      default:
        sortedUserList;
    }
    setUsers(sortedUserList)
  }

  function displayPopUp(obj) {
    setCurrentPopData(obj)
    setPopUp(true)
  }

  const columns = [
    {
      firstName: 'First Name',
      secondName: 'Last Name',
      thirdName: 'Email'
    }
  ]

  return (
    <>
    <table className=" table-auto">
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        {columns.map((item, index) => (
            <tr className="" key={index}>
              <th className="text-lg font-medium text-gray-900 px-3 py-4 text-left">{item.firstName} <Sorter sortBy = 'firstName' sort={sort} /></th>
              <th className="text-lg font-medium text-gray-900 px-3 py-4 text-left">{item.secondName}<Sorter sortBy = 'lastName' sort={sort} /></th>
              <th  className="text-lg font-medium text-gray-900 px-3 py-4 text-left">{item.thirdName} <Sorter sortBy = 'email' sort={sort} /></th>
            </tr>
          ))
        }
      </thead>
      <tbody>
        {users &&
          users.map((item, index) => (
          <tr onClick={()=>displayPopUp(item)} className={`${index%2 === 0 ? 'bg-gray-100 cursor-auto' : 'bg-white-100 cursor-auto' }`} key={index}>
            <td className="p-3 text-lg ">{item.first_name}</td>
            <td className="p-3 text-lg ">{item.last_name}</td>
            <td className="p-3 text-lg ">{item.email}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
    <Modal trigger={PopUp} setTrigger={setPopUp}>
      <div className="bg-white w-80 h-40 p-5 rounded-md">
        <h2><strong>User Details</strong></h2>
        <h3><strong>First Name: </strong> {currentPopData.first_name}</h3>
        <h3><strong>Last Name: </strong>{currentPopData.last_name}</h3>
        <h3><strong>Email:</strong> {currentPopData.email}</h3>
      </div>
    </Modal>
  </>
  );
}

export default User;
