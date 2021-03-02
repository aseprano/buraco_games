import {
    Injectable,
    ApiResponse,
    MicroserviceApiResponse, AbstractQueryAction, Context, LoggedUser
} from '@darkbyte/herr';

import e from 'express';

@Injectable()
export class TestAction extends AbstractQueryAction {

    public requiredParameters(): Array<string> {
        return [
            // list of required parameters
        ];
    }

    protected isAuthorized(user: LoggedUser): boolean {
        return true; // perform any check
    }

    public async serveRequest(request: e.Request, context: Context): Promise<ApiResponse> {
        return new MicroserviceApiResponse({
            message: 'Hi there!',
            items: [
                { id: 314, label: 'Pi' },
                { id: 100, label: 'A hundred' },
            ]
        });
    }
    
}