const Validate = (values) => {


  const errors = {}

  switch (true) {
    case !values.firstname || values.firstname === '':
      errors.firstname = 'Please Enter Firstname'
      break
    case !values.lastname || values.lastname === '':
      errors.lastname = 'Please Enter Lastname'
      break
    case !values.DOB || values.DOB === '':
      errors.DOB = 'Please Select DOB'
      break
    case !values.gender || values.gender === '':
      errors.gender = 'Please Select Gender'
      break
    case !values.department || values.department === '':
      errors.department = 'Please Select Department'
      break
    case !values.photo || values.photo === '':
      errors.photo = 'Please select File'
      break
    case !values.checkbox || values.checkbox === '':
      errors.checkbox = 'Please Select Terms & Condition'
      break
    default:
      return errors
  }
  return errors
}

export default Validate