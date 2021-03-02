import { FactoriesList } from '@darkbyte/herr/lib/container/impl/ContainerImpl';
import { FakeAuthService } from '@darkbyte/herr';

const singletons: FactoriesList = {
    AuthService: () => {
        const users = new Map(Object.entries({
            'kdarkbyte': {username: 'darkbyte', role: 'user'},
            'kjohn':     {username: 'john',     role: 'user'},
            'kdaddy':    {username: 'daddy',    role: 'user'},
            'kmummy':    {username: 'mummy',    role: 'user'},
            'kmoo':      {username: 'moo',      role: 'user'},
            'kadmin':    {username: 'admin',    role: 'admin'},
        }));

        return new FakeAuthService(users);
    },
}

const transients: FactoriesList = {

}

export { singletons, transients }
