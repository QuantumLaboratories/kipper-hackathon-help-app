import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'

import { env } from './env'

export const app = new Elysia()
  .use(swagger())
  .get('/', () => 'Hello Elysia')
  .listen(env.PORT, () => {
    console.log(`🦊 Elysia is running at localhost:${env.PORT}`)
  })
