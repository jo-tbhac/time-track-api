-- CreateTable
CREATE TABLE "user_jobs" (
    "user_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "job_id"),
    CONSTRAINT "user_jobs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "user_jobs_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
