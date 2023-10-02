import {ChatProvider} from './Contexts/ChatContext';
import './App.css';
import Container from './Components/Container';

function App() {
  return (
    <ChatProvider>
      <Container/>
    </ChatProvider>
  );
}

export default App;
