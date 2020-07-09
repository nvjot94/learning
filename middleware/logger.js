const { createLogger, format, transports } = require('winston')
const fs =require('fs');

let today=`${Date()}`.slice(4,15);

const logger = createLogger({
  transports: [
      new transports.File({
          filename: `./logs/${today}-logs`,
          level: 'info',
          format: format.combine(format.timestamp(), format.json())
      })
  ]
})
  

  module.exports=logger;