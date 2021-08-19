import {GQLContext} from '../context'

export function NativeRequestAdapter (ctx: GQLContext){
    return Array.of(ctx.req.type, ctx.req.variables, ctx.req.headers)
}
