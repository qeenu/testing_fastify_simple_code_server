const fastify = require('fastify')({ logger: false })

// Declare a route
fastify.get('/', async (request, reply) => {
  return  '<h1> Hello from fastify</h1>'
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
