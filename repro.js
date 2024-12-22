import { PrismaClient } from "randomdbname";

const prisma = new PrismaClient();

prisma.$connect();

const notes = prisma.note.findMany({ select: { title: true } });

console.log({ notes });
