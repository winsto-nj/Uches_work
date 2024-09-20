/*
  Warnings:

  - Added the required column `address` to the `School` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN', 'USER', 'STUDENT');

-- AlterTable
ALTER TABLE "School" ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "ROLE" NOT NULL;

-- CreateTable
CREATE TABLE "Encryption_keys" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "school_Id" INTEGER NOT NULL,
    "private_key" TEXT NOT NULL,
    "public_key" TEXT NOT NULL,

    CONSTRAINT "Encryption_keys_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Encryption_keys" ADD CONSTRAINT "Encryption_keys_school_Id_fkey" FOREIGN KEY ("school_Id") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
