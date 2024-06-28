import { sql } from 'drizzle-orm';
import {
  pgTableCreator,
  uuid,
  varchar,
  timestamp,
  text,
  decimal,
  integer,
  primaryKey,
} from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `compfest-salon_${name}`);

export const services = createTable('services', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  thumbnail_uri: varchar('thumbnail_uri', { length: 1024 }).notNull(),
  description: text('description').notNull(),
  duration: integer('duration').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const branches = createTable('branches', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  thumbnail_uri: varchar('thumbnail_uri', { length: 1024 }).notNull(),
  description: text('description').notNull(),
  rating: decimal('rating', { precision: 3, scale: 2 }),
  location: varchar('location', { length: 512 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const branchServices = createTable(
  'branch_services',
  {
    branchId: uuid('branch_id')
      .notNull()
      .references(() => branches.id, { onDelete: 'cascade' }),
    serviceId: uuid('service_id')
      .notNull()
      .references(() => services.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.branchId, table.serviceId] }),
  })
);
