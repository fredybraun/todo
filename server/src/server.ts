import Fastify from 'fastify';
import cors from '@fastify/cors'
import { z } from 'zod';
import { taskRoutes } from './routes/task';





async function bootstrap() {
    const fastify = Fastify({
        logger: true
    });

    await fastify.register(cors, {
        origin: true,
    });

    await fastify.register(taskRoutes);
    

   


    await fastify.listen({ host: 'localhost', port:3333 });
}

bootstrap();