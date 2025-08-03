import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ChatScreen from './screens/ChatScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="chat/:contactId" element={<ChatScreen />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App