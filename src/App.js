import Routes from './Routes';
import { ContextProvide } from './context';

const App = () => (
    <ContextProvide>
        <Routes />
    </ContextProvide>
);

export default App;
