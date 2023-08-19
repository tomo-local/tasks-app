
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

ALTER SCHEMA "public" OWNER TO "postgres";

CREATE EXTENSION IF NOT EXISTS "moddatetime" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE FUNCTION "public"."create_profile_for_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$begin
  insert into public.profiles(id,username)
  values(
    new.id,
    new.raw_user_meta_data::json->>'username'
  );

  return new;
end;$$;

ALTER FUNCTION "public"."create_profile_for_user"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE "public"."comments" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "content" "text" NOT NULL,
    "user_id" "uuid",
    "task_id" "uuid"
);

ALTER TABLE "public"."comments" OWNER TO "postgres";

CREATE TABLE "public"."custom_task_status" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "name" "text" NOT NULL,
    "origin_status" "uuid" NOT NULL,
    "color" "text" DEFAULT 'origin_status.default_color'::"text" NOT NULL
);

ALTER TABLE "public"."custom_task_status" OWNER TO "postgres";

CREATE TABLE "public"."origin_task_status" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "name" "text" NOT NULL,
    "default_color" "text" DEFAULT 'white'::"text" NOT NULL
);

ALTER TABLE "public"."origin_task_status" OWNER TO "postgres";

CREATE TABLE "public"."profiles" (
    "id" "uuid" NOT NULL,
    "updated_at" timestamp with time zone,
    "username" "text" NOT NULL,
    "first_name" "text",
    "last_name" "text",
    "avatar_url" "text",
    "self_introduction" character varying
);

ALTER TABLE "public"."profiles" OWNER TO "postgres";

CREATE TABLE "public"."projects" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "project_name" "text",
    "project_id" "text",
    "create_user" "uuid"
);

ALTER TABLE "public"."projects" OWNER TO "postgres";

CREATE TABLE "public"."relations" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"()
);

ALTER TABLE "public"."relations" OWNER TO "postgres";

CREATE TABLE "public"."tasks" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "title" "text" NOT NULL,
    "content" "text",
    "user_id" "uuid",
    "manage_user_id" "uuid",
    "update_at" timestamp with time zone DEFAULT "now"(),
    "relation" "uuid",
    "status" "uuid" DEFAULT 'c48780de-bfd6-4613-863a-9422d4fe63af'::"uuid" NOT NULL
);

ALTER TABLE "public"."tasks" OWNER TO "postgres";

ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "commnets_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."custom_task_status"
    ADD CONSTRAINT "custom_task_status_name_key" UNIQUE ("name");

ALTER TABLE ONLY "public"."custom_task_status"
    ADD CONSTRAINT "custom_task_status_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."projects"
    ADD CONSTRAINT "projects_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."relations"
    ADD CONSTRAINT "relations_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "task_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."origin_task_status"
    ADD CONSTRAINT "task_status_name_key" UNIQUE ("name");

ALTER TABLE ONLY "public"."origin_task_status"
    ADD CONSTRAINT "task_status_pkey" PRIMARY KEY ("id");

CREATE TRIGGER "change_task_table" AFTER INSERT OR DELETE OR UPDATE ON "public"."tasks" FOR EACH ROW EXECUTE FUNCTION "supabase_functions"."http_request"('https://product-sample-psjjmk16v-totoro-moroku.vercel.app/api/revalidate', 'POST', '{"Content-type":"application/json"}', '{"secret":"K@tgYtNyT3fBUV"}', '1000');

ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."custom_task_status"
    ADD CONSTRAINT "custom_task_status_origin_status_fkey" FOREIGN KEY ("origin_status") REFERENCES "public"."origin_task_status"("id");

ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."projects"
    ADD CONSTRAINT "projects_create_user_fkey" FOREIGN KEY ("create_user") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_manage_user_id_fkey" FOREIGN KEY ("manage_user_id") REFERENCES "public"."profiles"("id");

ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_relation_fkey" FOREIGN KEY ("relation") REFERENCES "public"."relations"("id");

ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_status_fkey" FOREIGN KEY ("status") REFERENCES "public"."custom_task_status"("id");

ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id");

CREATE POLICY "Enable delete for users based on user_id" ON "public"."comments" FOR DELETE USING (("auth"."uid"() = "user_id"));

CREATE POLICY "Enable insert for authenticated users only" ON "public"."comments" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."tasks" FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON "public"."tasks" FOR SELECT USING (true);

CREATE POLICY "Enable select for anonymous users" ON "public"."comments" FOR SELECT USING (true);

CREATE POLICY "Enable update access for all users" ON "public"."tasks" FOR UPDATE USING (true);

CREATE POLICY "Enable update for users based on user_id" ON "public"."comments" FOR UPDATE USING (("auth"."uid"() = "user_id"));

ALTER TABLE "public"."comments" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."custom_task_status" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."origin_task_status" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."projects" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."relations" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."tasks" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "パブリックなプロフィールはだれでも参照（sel" ON "public"."profiles" FOR SELECT USING (true);

CREATE POLICY "自身のプロフィールを更新（update）できる。" ON "public"."profiles" FOR UPDATE USING (("auth"."uid"() = "id"));

CREATE POLICY "自身のプロフィールを追加（insert）できる。" ON "public"."profiles" FOR INSERT WITH CHECK (("auth"."uid"() = "id"));

REVOKE USAGE ON SCHEMA "public" FROM PUBLIC;
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."create_profile_for_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."create_profile_for_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."create_profile_for_user"() TO "service_role";

GRANT ALL ON TABLE "public"."comments" TO "anon";
GRANT ALL ON TABLE "public"."comments" TO "authenticated";
GRANT ALL ON TABLE "public"."comments" TO "service_role";

GRANT ALL ON TABLE "public"."custom_task_status" TO "anon";
GRANT ALL ON TABLE "public"."custom_task_status" TO "authenticated";
GRANT ALL ON TABLE "public"."custom_task_status" TO "service_role";

GRANT ALL ON TABLE "public"."origin_task_status" TO "anon";
GRANT ALL ON TABLE "public"."origin_task_status" TO "authenticated";
GRANT ALL ON TABLE "public"."origin_task_status" TO "service_role";

GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";

GRANT ALL ON TABLE "public"."projects" TO "anon";
GRANT ALL ON TABLE "public"."projects" TO "authenticated";
GRANT ALL ON TABLE "public"."projects" TO "service_role";

GRANT ALL ON TABLE "public"."relations" TO "anon";
GRANT ALL ON TABLE "public"."relations" TO "authenticated";
GRANT ALL ON TABLE "public"."relations" TO "service_role";

GRANT ALL ON TABLE "public"."tasks" TO "anon";
GRANT ALL ON TABLE "public"."tasks" TO "authenticated";
GRANT ALL ON TABLE "public"."tasks" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
