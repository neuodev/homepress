export const validate = (
  name,
  email,
  phone,
  message,
  setNameAlert,
  setEmailAlert,
  setPhoneAlert,
  setMessageAlert
) => {
  if (!name) {
    setNameAlert('Name is requried');
    setEmailAlert(false);
    setPhoneAlert(false);
    setMessageAlert(false);
    return false;
  }

  const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email || !regExp.test(email)) {
    setNameAlert(false);
    setEmailAlert('Email is requried or Enter a valid Email');
    setPhoneAlert(false);
    setMessageAlert(false);
    return false;
  }

  const phoneRegExp = /^[1-9]\d{2}-\d{3}-\d{4}/;

  if (!phone || !phoneRegExp.test(phone)) {
    setNameAlert(false);
    setEmailAlert(false);
    setPhoneAlert('Phone is requried or Enter a valid Phone');
    setMessageAlert(false);
    return false;
  }
  if (!message) {
    setNameAlert(false);
    setEmailAlert(false);
    setPhoneAlert(false);
    setMessageAlert('Message is requried');
    return false;
  }
  return true;
};
