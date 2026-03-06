/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

export const registerPatient = async (
  _currentState: any,
  fromData: any,
): Promise<any> => {
  try {
    const registeredData = {
      password: fromData.get("password"),
      patient: {
        name: fromData.get("name"),
        email: fromData.get("email"),
        address: fromData.get("address"),
      },
    };

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registeredData));

    const response = await fetch(
      "http://localhost:5000/api/v1/user/create-patient",
      {
        method: "POST",
        body: newFormData,
      },
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.log(error);
    return {
      error: { message: "An error occurred during registration.", error },
    };
  }
};
