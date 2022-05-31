import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { userDelete } from '../store/slices/users/UserSlices';


const Read = () => {
  const ErrorcMessage = null
  const dispatch = useDispatch();
  const APIData = useSelector((state) => state.users);

  const deleteData = (id) => {
    dispatch(userDelete({ id }))
  }


  return (

    <div>
      <div>{process.env.REACT_APP_NOT_SECRET_CODE}</div>
      <div>{ErrorcMessage && ErrorcMessage}</div>
      <div> <Link to='/create'>
        <Button>Add</Button>
      </Link></div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>DOB</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
            <Table.HeaderCell>Photo</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {(APIData.length > 0) ? APIData.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firstname}</Table.Cell>
              <Table.Cell>{data.lastname}</Table.Cell>
              <Table.Cell>{data.DOB}</Table.Cell>
              <Table.Cell>{data.gender === "M" ? "Male" : "Female"}</Table.Cell>
              <Table.Cell>{data.department === "1" ? "Admin" : data.department === "2" ? "Manager" : "Developer"}</Table.Cell>
              <Table.Cell>{data.photo && <img src={data.photo} alt="my_photo" height="15px" width="15px" />}</Table.Cell>
              <Table.Cell>{data.checkbox ? "Checked" : "Unchecked"}</Table.Cell>
              <Table.Cell> <Link to={`/update/${data.id}`}><Button>Update</Button> </Link></Table.Cell>
              <Table.Cell><Link to='/read'><Button onClick={() => deleteData(data.id)}>Delete</Button></Link></Table.Cell>
            </Table.Row>
          )
          ) : <Table.Row><Table.Cell>Nothing to Display......</Table.Cell></Table.Row>}
        </Table.Body>
      </Table>
    </div>)
}

export default Read
