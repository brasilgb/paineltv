import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Header } from './components/common';
import { Acompanhamento, Evolucao, Home, VendasAno, VendasDia, VendasMes }  from './components/pages'
import './index.css';

function App() {
  return (
    <Fragment>

      <div className="antialiased flex flex-col h-screen bg-gray-100">
        <Router>
          <Header />

          <div className="flex-grow">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/acompanhamento" component={Acompanhamento} />
              <Route path="/vendasdia" component={VendasDia} />
              <Route path="/vendasmes" component={VendasMes} />
              <Route path="/vendasano" component={VendasAno} />
              <Route path="/evolucao" component={Evolucao} />
            </Switch>
          </div>

          <Footer />
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
