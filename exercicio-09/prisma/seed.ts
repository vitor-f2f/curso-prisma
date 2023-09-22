import prisma from "../src/database";

async function getDefaultUser() {
    const user = await prisma.customer.findFirst({
        where: {
            document: "133.245.497-60"
        }
    });

    return user;
}

async function createDefaultUser() {
    console.log("Creating default customer!");
    const user = await prisma.customer.create({
        data: {
            firstName: "Geraldo Luiz",
            lastName: "Datena",
            document: "133.245.497-60"
        }
    });

    return user;
}

async function checkOrCreateDefaultUser() {
    const user = await getDefaultUser();
    if (!user) await createDefaultUser();
    else console.log("Default customer already created.");

    return user;
}

// execução
(async () => {
    console.log("executing system");
    await checkOrCreateDefaultUser();
})(); // IIFE