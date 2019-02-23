import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  console.log('hello')
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };
}
