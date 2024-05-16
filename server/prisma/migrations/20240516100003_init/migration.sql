/*
  Warnings:

  - Added the required column `event_date` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "event_date" TIMESTAMP(3) NOT NULL;
