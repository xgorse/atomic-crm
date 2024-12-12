import { defaultTheme } from 'react-admin';
import { CRM } from './root/CRM';

/**
 * Application entry point
 *
 * Customize Atomic CRM by passing props to the CRM component:
 *  - contactGender
 *  - companySectors
 *  - darkTheme
 *  - dealCategories
 *  - dealPipelineStatuses
 *  - dealStages
 *  - lightTheme
 *  - logo
 *  - noteStatuses
 *  - taskTypes
 *  - title
 * ... as well as all the props accepted by react-admin's <Admin> component.
 *
 * @example
 * const App = () => (
 *    <CRM
 *       logo="./img/logo.png"
 *       title="Acme CRM"
 *    />
 * );
 */
const App = () => (
    <CRM
        title="Elao CRM"
        lightTheme={{
            ...defaultTheme,
            palette: {
                primary: {
                    main: '#ff4345',
                },
            },
        }}
    />
);

export default App;
