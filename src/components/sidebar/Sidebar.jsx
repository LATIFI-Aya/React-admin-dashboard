import "./Sidebar.scss";
//import DashboardIcon from '@material-ui/icons/Dashboard';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo"> Doorway Dreams</span></div>
        <hr />
        <div className="center"> 
            <ul>
                <li>
                  
                    <span>Dashboard</span>
                </li>
                <li>
                  <span>Users</span>
                </li>
                <li>
                  <span>Products</span>
                </li>
                <li>
                  <span>Orders</span>
                </li>
                <li>
                  <span>Orders</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar