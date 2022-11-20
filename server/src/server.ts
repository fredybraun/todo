import Fastify from 'fastify';
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


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
    
    fastify.post('/tasks',  async (request, reply) => {
        const createTaskBody = z.object({
            name: z.string(),
        })

       const { name }  = createTaskBody.parse(request.body)

       await prisma.task.create({
        data: {
            name, 
            status: true,
            order: '1',
        }
       })

      return reply.status(201).send({ name });
    }) 


    await fastify.listen({ host: 'localhost', port:3333 });
}

bootstrap();