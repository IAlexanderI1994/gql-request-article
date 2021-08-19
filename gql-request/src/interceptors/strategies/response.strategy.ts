import {InterceptStrategy} from './intercept.strategy'
import {
    AbstractInterceptor,
    GQLResponse,
} from '../cor/abstract.interceptor'
import {RetrieveDataInterceptor} from '../cor/retrieve-data.interceptor'
import {GQLContext} from '../context'
import {HandleRefreshToken} from '../cor/handle-refresh-token'

export class ResponseStrategy extends InterceptStrategy{

    async handle(ctx: GQLContext): Promise<GQLResponse['data']> {
        const handlersOrder: AbstractInterceptor[] = [
            new HandleRefreshToken(),
            new RetrieveDataInterceptor(),
        ]
        this.makeChain(handlersOrder)

        return await handlersOrder[0].intercept(ctx)
    }
}