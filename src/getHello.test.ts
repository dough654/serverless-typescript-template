 import * as assert from 'assert';
import { run } from './getHello'

describe('getHello', function() {
    it('should return an object with status 200', async function() {
        const event: any = {
            body: 'Hello World'
        }
        const response = await run(event, <any>{context: 'abc'}, undefined);
        if (response) {
            assert.deepEqual(response.statusCode, 200);
        } else {
            assert(false);
        }
    })
})

