CREATE TABLE IF NOT EXISTS "tours" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text DEFAULT '' NOT NULL,
	"img" text DEFAULT '' NOT NULL,
	"duration" integer NOT NULL
);
