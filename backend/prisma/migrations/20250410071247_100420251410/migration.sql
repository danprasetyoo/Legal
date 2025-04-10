/*
  Warnings:

  - Added the required column `legalReviewType` to the `ContractReview` table without a default value. This is not possible if the table is not empty.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- AlterTable
ALTER TABLE "ContractReview" ADD COLUMN     "legalReviewType" TEXT NOT NULL;
