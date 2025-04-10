/*
  Warnings:

  - Added the required column `reviewType` to the `ContractReview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContractReview" ADD COLUMN     "reviewType" TEXT NOT NULL;
