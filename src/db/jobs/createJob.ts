import prisma from '@/db/prisma'

export const createJob = async (params: { name: string; hourlyWage: number }) => {
  const result = await prisma.job.create({ data: params })
  return result
}
