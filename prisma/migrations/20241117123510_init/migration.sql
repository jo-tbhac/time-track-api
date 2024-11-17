-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hourly_wage" INTEGER NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);
