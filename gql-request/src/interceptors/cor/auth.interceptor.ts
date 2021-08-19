import {AbstractInterceptor} from './abstract.interceptor'
import {GQLContext} from '../context'

export class AuthInterceptor extends AbstractInterceptor{
    intercept(ctx: GQLContext): Promise<GQLContext> {
        if (typeof window !== 'undefined') {

            const token = window.localStorage.getItem('token')
            if (!!token && token !== 'undefined') {
                ctx.req.headers = {...ctx.req.headers, Authorization: `Bearer ${token}`}
            }
        }
        return super.intercept(ctx) 
    }

}