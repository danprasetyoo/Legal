-- CreateTable
CREATE TABLE "LegalOpinion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "officeEmail" TEXT NOT NULL,
    "reviewType" TEXT NOT NULL,
    "issueTitle" TEXT NOT NULL,
    "chronology" TEXT NOT NULL,
    "questions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LegalOpinion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractReview" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "officeEmail" TEXT NOT NULL,
    "documentName" TEXT NOT NULL,
    "secondParty" TEXT NOT NULL,
    "thirdParty" TEXT,
    "chronology" TEXT NOT NULL,
    "legalQuestions" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContractReview_pkey" PRIMARY KEY ("id")
);
