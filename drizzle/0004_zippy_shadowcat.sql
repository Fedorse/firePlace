CREATE TABLE IF NOT EXISTS "colors" (
	"id" serial PRIMARY KEY NOT NULL,
	"hex" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_colors" (
	"product_id" integer NOT NULL,
	"color_id" integer NOT NULL,
	CONSTRAINT "product_colors_product_id_color_id_pk" PRIMARY KEY("product_id","color_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_colors" ADD CONSTRAINT "product_colors_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_colors" ADD CONSTRAINT "product_colors_color_id_colors_id_fk" FOREIGN KEY ("color_id") REFERENCES "public"."colors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN IF EXISTS "colors";