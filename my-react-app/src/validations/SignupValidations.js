export default function SignupValidation(formData) {
  const name_pattern = /^[A-Za-z]+$/;

  const errors = {};

  if (formData.firstName === "") {
    errors.firstName = "First Name is required!";
  } else if (!name_pattern.test(formData.firstName)) {
    errors.firstName = "Name should not contain digits and special characters";
  }

  if (formData.lastName === "") {
    errors.lastName = "Last Name is required!";
  } else if (!name_pattern.test(formData.firstName)) {
    errors.firstName = "Name should not contain digits and special characters";
  }

  if (formData.email === "") {
    errors.email = "Email is required!";
  } else if (!email_pattern.test(formData.email)) {
    errors.email = "Invalid Email format";
  }

  if (formData.password === "") {
    errors.password = "Password is required!";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
}
