CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"name_en" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"published" boolean DEFAULT true,
	"name" varchar(256) NOT NULL,
	"short_description" text NOT NULL,
	"description" text DEFAULT '',
	"imgUrl" varchar DEFAULT '',
	"videoFile" varchar DEFAULT '',
	"price" integer NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"categories_id" integer,
	CONSTRAINT "product_name_unique" UNIQUE("name")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product" ADD CONSTRAINT "product_categories_id_categories_id_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
