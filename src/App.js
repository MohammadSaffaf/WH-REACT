
import './App.css';
import ChangMood from './components/ChangeMood';
import Counter from './components/Counter';
import DayNightChang from './components/DayNightChang';
import StateFaq from './components/StateFaq';

function App() {
  return (
    <article>
      <Counter/>
      <StateFaq/>
      <DayNightChang/>
      <ChangMood/>
    </article>
  );
}

export default App;
