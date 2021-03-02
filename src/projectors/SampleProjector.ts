import { AbstractProjector, IncomingEvent, Injectable, Queryable } from '@darkbyte/herr';

@Injectable()
export class SampleProjector extends AbstractProjector {

    constructor(
        connection: Queryable
    ) {
        super(connection);
    }

    public getId(): string {
        return 'com.herrdoktor.myproject.projectors.SampleProjector';
    }

    public getEventsOfInterest(): Array<string> {
        return [
        ];
    }

    public async handleEvent(event: IncomingEvent): Promise<void> {
        switch (event.getName()) {
        }
    }

    public async clear(): Promise<void> {
        return this.getConnection()
            .query('DELETE FROM mytable')
            .then(() => {});
    }
}