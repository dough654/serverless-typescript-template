import { APIGatewayProxyHandler } from 'aws-lambda';

export const run: APIGatewayProxyHandler = async (event, _context) => {
  console.log('i ran')
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Got it from the post',
      input: event,
    }),
  };
}
