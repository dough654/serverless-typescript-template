import { APIGatewayProxyHandler } from 'aws-lambda';

export const run: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
      input: event,
    }),
  };
}
