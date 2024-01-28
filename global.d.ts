import type { PrismaClient } from "@prisma/client";
// import type {MongoClient}

declare global{
    namespace globalThis{
        var prismadb: PrismaClient
    }
}