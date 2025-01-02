// export { default } from "next/middleware";

export function middleware() {
  return Response.redirect(new URL("/campaigns", "http://localhost:3000"));
}

export const config = {
  matcher: "/"
};