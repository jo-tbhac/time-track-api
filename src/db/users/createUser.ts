import prisma from '@/db/prisma'

export const createUser = async (params: { name: string; email: string }) => {
  const result = await prisma.user.create({ data: params })
  return result
}
