import { createJob, findJob, findJobs } from '@/db/jobs'
import { createUser } from '@/db/users'

export const resolvers = {
  Query: {
    jobs: () => {
      return findJobs()
    },
    job: (_, { id }) => {
      return findJob(id)
    }
  },
  Mutation: {
    createJob: (_, { input: { name, hourlyWage } }) => {
      return createJob({ name, hourlyWage })
    },
    createUser: (_, { input: { name, email } }) => {
      return createUser({ name, email })
    }
  }
}
