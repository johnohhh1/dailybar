// functions/submitForm.js

exports.handler = async (event, context) => {
  const formData = JSON.parse(event.body);
  const { bartender, manager } = formData;

  // Here you can process the form data (e.g., send email, store in database, etc.)
  // Example: Sending a response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Form submitted successfully by ${bartender}` }),
  };
};
