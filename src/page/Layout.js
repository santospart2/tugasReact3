import { Outlet, Link } from "react-router-dom";
const Style = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };


const Layout = () => {
  return (
    <>
      <nav style={Style}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List Buku</Link>
          </li>
          <li>
            <Link to="/pinjam">Pinjam</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;