/*
  Warnings:

  - Added the required column `issueTitle` to the `ContractReview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContractReview" ADD COLUMN     "issueTitle" TEXT NOT NULL;
