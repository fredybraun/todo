import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const task = await prisma.task.create({
        data: {
            name: 'Task 01 teste',
            status:  'checked',
            order:    '1',
        }
    });
}

main();