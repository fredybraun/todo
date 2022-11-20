import { FastifyBaseLogger, FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma'


export async function taskRoutes(fastify: FastifyInstance) {

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

    fastify.delete('/tasks/delete/:id', async (request, reply) => {
        const getTaskParams = z.object({
            id: z.string(),
        });

        const { id }  = getTaskParams.parse(request.params);

        const deleteTask = await prisma.task.delete({
            where: {
                id: id,
            },
        });

        if (deleteTask) {
            return reply.status(201).send('Post deleted.');
        }
    }); 
}