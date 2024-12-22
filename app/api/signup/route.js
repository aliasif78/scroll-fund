import { NextResponse } from "next/server";
import { signUpSubmitHandler } from "@/actions/auth";

export async function POST(request) {
  try {
    // Parse the incoming request body
    const formData = await request.json(); // Directly parse the JSON body

    // Call the handler with the parsed form data
    const response = await signUpSubmitHandler(formData);
    console.log("RESPONSE: ", response);

    // Return a success response
    return NextResponse.json({
      success: true,
      message: response.success, // Use the response directly
    });
  } catch (error) {
    console.error("ERROR: ", error);

    // Return an error response
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    ); // Properly handle the error status
  }
}
