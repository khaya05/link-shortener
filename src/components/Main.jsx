import { Stats, Links } from './';

import '../styles/Main.css';

function Main() {
  return (
    <main role='main' className="main">
      <div className="container">
        <Links />
        <Stats />
      </div>
    </main>
  );
}

export default Main;
