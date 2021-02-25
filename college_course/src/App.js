
import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
        <Button color="primary" outline onClick={notify}>primary</Button>
        <ToastContainer />
    </div>
  );
}

export default App;
