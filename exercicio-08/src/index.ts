import prisma from "./database";

(async () => {
    const studentsPerClass = await prisma.student.groupBy({
        by: ['class'],
        _count: true,
        orderBy: {
            _count: { id: "desc" }
        }
    })
    console.log(studentsPerClass);

    const studentsJobless = await prisma.student.groupBy({
        by: ['class'],
        _count: {
            _all: true
        },
        where: {
            jobId: null
        },
        orderBy: {
            _count: { id: 'desc' }
        }
    })
    console.log(studentsJobless);
})();