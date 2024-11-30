import { createJob, findJob, findJobs } from '@/db/jobs'

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
    }
  }
}
