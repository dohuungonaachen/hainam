import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

    const post = await prisma.post.create({
        data: {
            title: 'Prisma makes databases easy',
            author: {
                connect: { email: 'sarah@prisma.io' },
            },
        },
    })
    console.log(post)

    const allUsers = await prisma.user.findMany({
        include: { posts: true },
    })
    // use `console.dir` to print nested objects
    console.dir(allUsers, { depth: null })

    console.log("Number of users ", allUsers.length)
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
