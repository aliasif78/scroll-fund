"use server"

export const signUpSubmitHandler = async (e) => {
    // console.log(e.get("name"), e.get("username"), e.get("email"), e.get("password"), e.get("reenterpassword"))

    const name = e.get("name")
    const username = e.get("username")
    const country = e.get("country")
    const city = e.get("city")
    const email = e.get("email")
    const password = e.get("password")
    const reenterpassword = e.get("reenterpassword")

    if (!name || !email || !password || !reenterpassword || (username && (country || city)) || (!username && (!country || !city))) {
        throw new Error('Please fill in all required fields');
    }

    if (password !== reenterpassword) {
        throw new Error('Passwords do not match.');
    }

    // Check for user or charity
    // Check for existing username
    // Check for existing email
    return  { success: "User created successfully" }
}