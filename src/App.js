import Dashboard from "./components/Dashboard";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from "./components/Header";

function App() {
  return (
  <>
  <Header/>
  <DndProvider backend={HTML5Backend}>
  <Dashboard/>
  </DndProvider>
  </>
  );
}

export default App;
