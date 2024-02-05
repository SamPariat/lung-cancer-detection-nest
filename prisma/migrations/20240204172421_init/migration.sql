-- CreateTable
CREATE TABLE "PersonInfo" (
    "id" SERIAL NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "age" SMALLINT NOT NULL,
    "smoking" SMALLINT NOT NULL,
    "yellowFingers" SMALLINT NOT NULL,
    "anxiety" SMALLINT NOT NULL,
    "peerPressure" SMALLINT NOT NULL,
    "chronicDisease" SMALLINT NOT NULL,
    "fatigue" SMALLINT NOT NULL,
    "allergy" SMALLINT NOT NULL,
    "wheezing" SMALLINT NOT NULL,
    "alchoholConsuming" SMALLINT NOT NULL,
    "coughing" SMALLINT NOT NULL,
    "shortnessOfBreath" SMALLINT NOT NULL,
    "swallowingDifficulty" SMALLINT NOT NULL,
    "chestPain" SMALLINT NOT NULL,

    CONSTRAINT "PersonInfo_pkey" PRIMARY KEY ("id")
);
