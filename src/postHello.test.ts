import * as assert from 'assert';
import { run } from './postHello'

describe('postHello', function() {
    it('should return an object with status 201', async function() {
        const event: any = {
            body: 'Hello World'
        }
        const response = await run(event, <any>{context: 'abc'}, undefined);
        if (response) {
            assert.deepEqual(response.statusCode, 201);
        } else {
            assert(false);
        }
    })
})

