import { APIGatewayProxyHandler } from 'aws-lambda';

export const run: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Hello From Post',
      input: event,
    }),
  };
}
