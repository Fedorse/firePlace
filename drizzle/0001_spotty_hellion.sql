ALTER TABLE "products" ALTER COLUMN "name" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "name_en" text NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "published" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "short_description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "description" text DEFAULT '';--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "imgUrl" varchar DEFAULT '';--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "videoFile" varchar DEFAULT '';--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "price" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "sort_order" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "tags" ADD COLUMN "name_en" text NOT NULL;