import { GQLContext } from '../context'
import { NativeRequestAdapter } from './native-request.adapter'

describe('Native request adapter', () => {

    it('should correctly format data', () => {

        const ctx = new GQLContext({})

        const req = {
            type: 'test',
            variables: {b: 2},
            headers: {
                a: 1
            },
        }
        ctx.setRequest(req)

        const value = new NativeRequestAdapter(ctx)
        expect(value).toEqual([ req.type, req.variables, req.headers ])
    })
})