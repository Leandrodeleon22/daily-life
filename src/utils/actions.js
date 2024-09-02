"use server";

import jwt from "jsonwebtoken";
import { revalidatePath, revalidateTag } from "next/cache";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

export async function inputPassword(formData) {
  const password = formData.get("password");
  const secretKey = "your_secret_key";

  const payload = { password };
  const token = jwt.sign(payload, secretKey, { expiresIn: "4h" });

  // const token = null;

  if (password === process.env.PASSWORD && token) {
    // console.log(token);
    cookies().set("user", token);
    redirect("/home");
  }

  return;
  // redirect("/");

  //   console.log(formdata);
}

export async function deleteCookies() {
  cookies().delete("user");
  revalidateTag("/home");
  // revalidate("/home");
  redirect("/");
}
