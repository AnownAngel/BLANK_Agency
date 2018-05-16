module.exports = {
    sql: {
        host: '127.0.0.1',
      database: 'users',
      user: 'root',
      password: '',
      dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
      logging: true,
      timezone: '+05:30',
    } /*,
    seedDB:false,
    seedMongoDB:false,
    seedDBForce:true,
    db:'mongo' // mongo,sql if you want to use any SQL change dialect above in sql config */
  }
