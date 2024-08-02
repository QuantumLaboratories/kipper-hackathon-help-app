CREATE TABLE IF NOT EXISTS "help_point" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"location" varchar NOT NULL,
	"services" varchar NOT NULL,
	"organizer_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cpf" varchar(11),
	"full_name" varchar NOT NULL,
	"phone_number" varchar(11)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "help_point" ADD CONSTRAINT "help_point_organizer_id__id_fk" FOREIGN KEY ("organizer_id") REFERENCES "public".""("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
