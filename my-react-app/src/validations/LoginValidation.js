export default function LoginValidation(formData) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
