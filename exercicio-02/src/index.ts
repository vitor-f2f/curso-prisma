import prisma from "./database/database";

(async () => {
  const result = await prisma.passengers.findMany();
  
  console.log("Posts encontrados no banco:", result);
})();