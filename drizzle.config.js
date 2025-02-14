export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://my-app_owner:Q3tm9HGkBjfI@ep-silent-sound-a5lg399c-pooler.us-east-2.aws.neon.tech/my-app?sslmode=require",
    connectionString:
      "postgresql://my-app_owner:Q3tm9HGkBjfI@ep-silent-sound-a5lg399c-pooler.us-east-2.aws.neon.tech/my-app?sslmode=require",
  },
};
