"use server";

export const signUpSubmitHandler = async (formData) => {
  const { name, username, country, city, email, password, reenterpassword } = formData;

  // Presence checks
  if (!name || !email || !password || !reenterpassword || (username && (country || city)) || (!username && (!country || !city))) {
    return { error: "Incomplete form data." };
  }

  // Password Validation
  if (password !== reenterpassword) throw new Error("Passwords do not match.");

  // Check for user or charity
  // Check for existing username
  // Check for existing email
  return { message: "User created successfully." };
};

export const loginSubmitHandler = async (e) => {};
