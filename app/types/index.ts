import { User,Listing } from "@prisma/client";

// we select from Listing createdAt
export type SafeListing =Omit<Listing,"createdAt"> & {
    createdAt:string;
}


export type SafeUser = Omit<User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}