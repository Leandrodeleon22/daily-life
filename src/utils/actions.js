"use server";

import { redirect } from "next/navigation";

export async function inputPassword(formData) {
  const password = formData.get("password");
  if (password === process.env.PASSWORD) {
    redirect("/home");
  }

  return;

  //   console.log(formdata);
}
