// Melissa was here
import { QueryClient, QueryClientProvider } from 'react-query'
import { RedStripe } from './RedStripe';
import { BlueStripe } from './BlueStripe';
import './App.css'

const myQueryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      React III Yeeeerrrrrrr
      <QueryClientProvider client={myQueryClient}>
        <RedStripe />
        <BlueStripe />
      </QueryClientProvider>
    </div>
  );
}

export default App;
