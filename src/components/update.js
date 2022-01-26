import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useHistory, useLocation } from 'react-router';
import { userUpdate } from '../store/slices/users/UserSlices';
import Validate from '../validation/validation'


const Update = (props) => {

  const { pathname } = useLocation();
  const userId = pathname.replace("/update/", "");

  useSelector(users => {
    console.log(users)
  })
  //console.log(useSelector(props))
  const user = useSelector((state) =>
    state.users.find((user) => user.id === parseInt(userId, 10))
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [DOB, setDOB] = useState(user.DOB);
  const [gender, setGender] = useState(user.gender);
  const [department, setDepartment] = useState(user.department);
  const [photo, setPhoto] = useState(user.photo);
  const [checkbox, setCheckbox] = useState(user.checkbox);
  const [ErrorcMessage, setErrorcMessage] = useState({})

  const photoUploadHandler = (e) => {
    //console.log(e.target.files[0])
    let foto = e.target.files[0];
    setPhoto(URL.createObjectURL(foto))
  }

  const updateAPIData = (e) => {
    e.preventDefault();
    const data = { firstname, lastname, DOB, gender, department, photo, checkbox }

    const Emessage = Validate(data)
    setErrorcMessage(Emessage)
    console.log('here', Emessage)
    if (Object.keys(Emessage).length !== 0) return

    data.id = parseInt(userId, 10) + 1
    dispatch(userUpdate(data))

    history.push("/read");
  }

  return (

    <div>
      <Form className="create-form" onSubmit={updateAPIData}>
        <Form.Field>
          <label>First Name </label>
          <input
            placeholder='First Name'
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {ErrorcMessage.firstname && <label>{ErrorcMessage.firstname}</label>}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          {ErrorcMessage.lastname && <label>{ErrorcMessage.lastname}</label>}
        </Form.Field>
        <Form.Field>
          <label>DOB</label>
          <input
            type="date"
            placeholder='DOB'
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
          />
          {ErrorcMessage.DOB && <label>{ErrorcMessage.DOB}</label>}
        </Form.Field>
        <Form.Field>
          <label>Gender</label>
          <label for="male">Male</label>

          <input
            type="radio"
            id="male"
            name="gender"
            value="M"
            checked={gender === 'M'}

            onChange={(e) => { setGender(e.target.value) }} />

          &nbsp;&nbsp;<span>Female</span>
          <input
            type="radio"
            id="female"
            name="gender"
            value="F"
            checked={gender === 'F'}
            onChange={(e) => { setGender(e.target.value) }} />
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
        {photo &&
          <Form.Field >
            <img src={photo} alt="my_photo" height="75px" width="75px" />
          </Form.Field>
        }
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
          {ErrorcMessage.checkbox && <label>{ErrorcMessage.checkbox}</label>}
        </Form.Field>
        <Button type="submit" >Update</Button>
      </Form>
    </div >
  )
}
Update.defaultProps = {

}
export default Update