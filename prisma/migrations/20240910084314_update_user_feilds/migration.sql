/*
  Warnings:

  - You are about to drop the column `schoolId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_schoolId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "schoolId",
ADD COLUMN     "school_Id" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_school_Id_fkey" FOREIGN KEY ("school_Id") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;
