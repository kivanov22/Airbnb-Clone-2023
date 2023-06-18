import { User,Listing, Reservation } from "@prisma/client";

// we select from Listing createdAt
export type SafeListing =Omit<Listing,"createdAt"> & {
    createdAt:string;
}


export type SafeReservation = Omit<Reservation,'createdAt' | 'startDate' | 'endDate' | 'listing'> & {
    createdAt:string;
    startDate:string;
    endDate:string;
    listing:SafeListing;
}

export type SafeUser = Omit<User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}