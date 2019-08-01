const mammoth = require('mammoth')

module.exports = async (request, response) => {
  const { value } = await mammoth.convertToHtml({
    buffer: request.body
  })

  response.setHeader('Content-Type', 'text/html;charset=utf-8')
  response.send(`<!doctype html><html><meta charset="utf=8"><body>${value}</body></html>`)
};
