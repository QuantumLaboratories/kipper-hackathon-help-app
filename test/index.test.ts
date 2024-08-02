import { describe, it, expect } from 'bun:test'
import { treaty } from '@elysiajs/eden'

import { app } from '@/index'

const api = treaty(app)

describe('Elysia', () => {
  it('testing', () => {
    expect(1 + 1).toBe(2)
  })
})
