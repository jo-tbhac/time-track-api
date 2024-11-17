import prisma from '@/db/prisma'

export const findJob = async (id: number) => {
  const result = await prisma.job.findUnique({ where: { id } })
  return result
}
