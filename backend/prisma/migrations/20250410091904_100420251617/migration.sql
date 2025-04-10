/*
  Warnings:

  - You are about to drop the column `legalQuestions` on the `ContractReview` table. All the data in the column will be lost.
  - You are about to drop the column `legalReviewType` on the `ContractReview` table. All the data in the column will be lost.
  - Added the required column `questions` to the `ContractReview` table without a default value. This is not possible if the table is not empty.
  - Made the column `thirdParty` on table `ContractReview` required. This step will fail if there are existing NULL values in that column.
  - Made the column `additionalInfo` on table `ContractReview` required. This step will fail if there are existing NULL values in that column.
  - Made the column `issueTitle` on table `ContractReview` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ContractReview" DROP COLUMN "legalQuestions",
DROP COLUMN "legalReviewType",
ADD COLUMN     "questions" TEXT NOT NULL,
ALTER COLUMN "thirdParty" SET NOT NULL,
ALTER COLUMN "additionalInfo" SET NOT NULL,
ALTER COLUMN "issueTitle" SET NOT NULL;
