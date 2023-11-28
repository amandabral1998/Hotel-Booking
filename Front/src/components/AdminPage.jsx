import {   Link, useParams,  } from 'react-router-dom';
import '../css/AdminPage.css'
import User from './User';
import AddRoom from './AddRoom';
const AdminPage = () => {
    const parameters = useParams()

  return (
  <>
 
      <div className="admin-page">
        <nav>
          <ul>
            
            <li>
              <Link to="/admin/:users">Users</Link>
            </li>
            <li>
              <Link to="/admin/:bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/admin/:add-room">Add Room</Link>
            </li>
          </ul>
        </nav>

{parameters.user==':users' && <User/>}
        {/* { {parameters.user= ":bookings" && } */}
        
        {parameters.user== ":add-room" && <AddRoom/> } 
      </div>
      </>
  );
};

export default AdminPage;
