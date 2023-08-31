export const getFormData = () => {
  try {
    const formDataString = localStorage.getItem("formData");

    if (formDataString) {
      const formData = JSON.parse(formDataString);
      return formData;
    }
  } catch (error) {
    console.error("Error retrieving formData from local storage: ", error);
  }

  return null;
};
