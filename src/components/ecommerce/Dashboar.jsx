// SidebarLayout.jsx
import "./SidebarLayout.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <header>
          <h1>Welcome to Your Dashboard</h1>
        </header>
        <section className="cards">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
