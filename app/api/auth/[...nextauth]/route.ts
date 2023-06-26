import NextAuth from "next-auth";

import { authOPtions } from "@/lib/session";

const handler = NextAuth(authOPtions);

export { handler as GET , handler as POST};