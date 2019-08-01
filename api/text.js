const mammoth = require('mammoth')

module.exports = async (request, response) => {
  const { value } = await mammoth.extractRawText({
    buffer: request.body
  })

  response.setHeader('Content-Type', 'text/plain;charset=utf-8')
  response.send(value)
};
