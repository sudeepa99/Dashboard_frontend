export default function LoginValidation(formData) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (formData.email === "") {
    errors.email = "Email is required!";
  } else if (!email_pattern.test(formData.email)) {
    errors.email = "Invalid Email format";
  }

  return errors;
}
