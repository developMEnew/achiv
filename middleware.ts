export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/search",
    "/notifications",
    "/profile",
    "/settings",
  ],
};