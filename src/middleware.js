export function middleware(request) {
  const currentUser = request.cookies.get("user")?.value;

  // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return Response.redirect(new URL('/dashboard', request.url))
  // }
  // console.log(request.url);
  if (!currentUser) {
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
