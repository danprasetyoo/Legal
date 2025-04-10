/*
  Warnings:

  - Made the column `reviewType` on table `ContractReview` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ContractReview" ALTER COLUMN "reviewType" SET NOT NULL;
