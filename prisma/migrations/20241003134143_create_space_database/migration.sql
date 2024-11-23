-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "reaction" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newslatter" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "newslatter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "newslatter_email_key" ON "newslatter"("email");
