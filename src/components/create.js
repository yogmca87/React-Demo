import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { userAdd } from '../store/slices/users/UserSlices';
import Validate from '../validation/validation'

const Create = (props) => {

  const dispatch = useDispatch();
  let history = useHistory();

  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [DOB, setDOB] = useState(null);
  const [gender, setGender] = useState(false);
  const [department, setDepartment] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [checkbox, setCheckBox] = useState(false);
  const [ErrorcMessage, setErrorcMessage] = useState({})

  const counter = useSelector((state) => state.users.length)

  const photoUploadHandler = (e) => {
    //console.log(e.target.files[0])
    let foto = e.target.files[0];
    setPhoto(URL.createObjectURL(foto))
  }

  const saveFormHandler = (e) => {
    e.preventDefault();
    const data = { firstname, lastname, DOB, gender, department, photo, checkbox }

    const Emessage = Validate(data)
    setErrorcMessage(Emessage)

    if (Object.keys(Emessage).length !== 0) return

    data.id = counter + 1
    dispatch(userAdd(data))

    history.push("/read");
  }
  console.log(ErrorcMessage)
  return (

    <Form className="create-form" onSubmit={saveFormHandler}>
      <Form.Field required>
        <label>First Name</label>
        <input
          value={firstname}
          placeholder='First Name'
          onChange={(e) => { setFirstName(e.target.value) }}
        />
        {ErrorcMessage.firstname && <label>{ErrorcMessage.firstname}</label>}
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          value={lastname}
          placeholder='Last Name'
          onChange={(e) => { setLastName(e.target.value) }}
        />
        {ErrorcMessage.lastname && <label>{ErrorcMessage.lastname}</label>}
      </Form.Field>
      <Form.Field>
        <label>DOB</label>
        <input
          type="date"
          value={DOB}
          placeholder='DOB'
          onChange={(e) => { setDOB(e.target.value) }}
        />
        {ErrorcMessage.DOB && <label>{ErrorcMessage.DOB}</label>}
      </Form.Field>
      <Form.Field>
        <label>Gender</label>
        <span>Male</span>
        <input
          type="radio"
          id="male"
          name="gender"
          value="M"
          onChange={(e) => { setGender(e.target.value) }}
        />
        <span>Female</span>
        <input
          type="radio"
          id="female"
          name="gender"
          value="F"
          onChange={(e) => { setGender(e.target.value) }}
        />
        {ErrorcMessage.gender && <label>{ErrorcMessage.gender}</label>}
      </Form.Field>
      <Form.Field>
        <label>Department</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="1">Admin</option>
          <option value="2">Manager</option>
          <option value="3">Developer</option>
        </select>
        {ErrorcMessage.department && <label>{ErrorcMessage.department}</label>}
      </Form.Field>
      <Form.Field >
        <label>Photo</label>
        <input
          type="file"
          placeholder='Your Photo'
          onChange={photoUploadHandler}
        />
        {ErrorcMessage.photo && <label>{ErrorcMessage.photo}</label>}
      </Form.Field>
      { photo &&
        <Form.Field >
          <img src={photo} alt="my_photo" height="75px" width="75px" />
        </Form.Field>
      }

      <Form.Field>
        <Checkbox
          checked={checkbox}
          label='I agree to the Terms and Conditions'
          onChange={(e) => setCheckBox(!checkbox)}
        />
        {ErrorcMessage.checkbox && <label>{ErrorcMessage.checkbox}</label>}
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>)
}

export default Create