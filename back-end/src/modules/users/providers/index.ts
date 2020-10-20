import { container } from 'tsyringe';

import IHashProvier from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvier>('HashProvider', BCryptHashProvider);
