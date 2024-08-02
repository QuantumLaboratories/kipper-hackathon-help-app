import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const user = pgTable('', {
  id: uuid('id').primaryKey().defaultRandom(),
  cpf: varchar('cpf', { length: 11 }),
  fullName: varchar('full_name').notNull(),
  phoneNumber: varchar('phone_number', { length: 11 }),
})

export const helpPoint = pgTable('help_point', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name'),
  location: varchar('location').notNull(),
  services: varchar('services').notNull(),
  organizerId: uuid('organizer_id')
    .notNull()
    .references(() => user.id),
})

export const schema = { user, helpPoint }
