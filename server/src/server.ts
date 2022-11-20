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
    });

    await fastify.register(cors, {
        origin: true,
    });

    //ROTAS
    fastify.get('/tasks/count',  async () => {
       const taskCount = await prisma.task.count();

       return {taskCount}
    });

    fastify.get('/tasks/count/open',  async () => {
        const taskCountOpen = await prisma.task.aggregate({
            _count: true ,
            where: {
                status: true,
            }

        })

        const tasksOpen  = taskCountOpen._count

        return { tasksOpen }
    });  

     fastify.get('/tasks',  async (request, reply) => {
        const tasks = await prisma.task.findMany({
           
        });

        if (!tasks) {
            return reply.status(404).send('Post not found.')
        } else {
            return { tasks }
        }

    });  
    
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

      return reply.status(201).send('Task creaded.');
    }); 

    fastify.put('/tasks/update/:id', async (request, reply) => {
        const getTaskParams = z.object({
            id: z.string(),
        });

        const { id }  = getTaskParams.parse(request.params);

        const updateStatus = await prisma.task.update({
            where: {
                id: id,
            },
            data: {
                status: false
            }
        });

        if (updateStatus) {
            return reply.status(201).send('Post updated.');
        }
    });


    await fastify.listen({ host: 'localhost', port:3333 });
}

bootstrap();