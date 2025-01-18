const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const response = await fetch('http://localhost:5000/ads'); // Пример API
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};