import { Type } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

const envSchema = Type.Object({
  // biome-ignore lint/style/useNamingConvention: <explanation>
  DATABASE_URL: Type.String(),
  // biome-ignore lint/style/useNamingConvention: <explanation>
  PORT: Type.String(),
})

if (!Value.Check(envSchema, process.env)) {
  throw new Error('Invalid environment variables!')
}

export const env = process.env
