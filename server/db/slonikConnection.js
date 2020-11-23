import { createPool } from 'slonik'
const config = require('./config.json')

const pool = createPool(`postgres://${config.host}:${config.port}/${config.database}?user=${config.user}&password=${config.password}`)

function main(asyncMain) {
  asyncMain()
    .then(exitCode => {
      process.exit(exitCode || 0)
    })
    .catch(err => {
      console.log(err)
      process.exit(1)
    })
}

main(async () => {
  pool.connect(async (connection) => {
    console.log('hello')
    console.log(await connection.query(sql`SELECT 1`));
  });
})
