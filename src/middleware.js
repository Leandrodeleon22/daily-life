import { jwtVerify } from "jose";
import { checkToken } from "./utils/actions";

export async function middleware(request) {
  const currentUser = request.cookies.get("user")?.value;

  // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return Response.redirect(new URL('/dashboard', request.url))
  // }
  // console.log(request.url);

  if (!currentUser) {
    return Response.redirect(new URL("/", request.url));
  }

  try {
    // Verify the token
    const { payload } = await jwtVerify(
      currentUser,
      new TextEncoder().encode("your_secret_key")
    );

    // Check if the token is expired
    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTime) {
      // Token is expired, delete the cookie and redirect to the login page
      request.cookies.delete("user");
      return Response.redirect(new URL("/", request.url));
    }
  } catch (error) {
    // If there's an error verifying the token (e.g., invalid token), redirect to login
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/home/:path",
    "/messages/:path",
    "/proverbs/:path",
    "/providence-events/:path",
    "/providence-quiz/:path",
  ],
};
