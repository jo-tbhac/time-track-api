import prisma from '@/db/prisma'

export const findJobs = async () => {
  const result = await prisma.job.findMany()
  return result
}
