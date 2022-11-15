import Fastify from 'fastify';
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient({
    log: ['query'],
});

async function bootstrap() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
        origin: true,
    })

    //ROTAS
    fastify.get('/tasks/count',  async () => {
       const taskCount = await prisma.task.count();

       return {taskCount}
    }) 


    await fastify.listen({ host: 'localhost', port:3333 });
}

bootstrap();