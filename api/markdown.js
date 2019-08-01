const mammoth = require('mammoth')

module.exports = async (request, response) => {
  const { value } = await mammoth.convertToMarkdown({
    buffer: request.body
  })

  response.setHeader('Content-Type', 'text/markdown;charset=utf-8')
  response.send(value)
};
