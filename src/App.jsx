import React, { useMemo, useState } from 'react';
import { enrichPhase } from './phases.js';
import { useJourneyData } from './usePhases.js';
import Header from './components/Header.jsx';
import GoalBand from './components/GoalBand.jsx';
import KartaView from './components/KartaView.jsx';
import Drawer from './components/Drawer.jsx';

export default function App() {
  const [sel, setSel] = useState(-1);
  const [rows, setRows] = useState({
    insights: true,
    citat: true,
    pains: true,
    objective: true,
    solutions: true,
    visualisering: false,
    businessAreas: true
  });

  const { phases: rawPhases, swimlanes } = useJourneyData();

  const phases = useMemo(() => rawPhases.map(enrichPhase), [rawPhases]);

  const openDrawer = (i) => setSel(i);
  const closeDrawer = () => setSel(-1);
  const toggleRow = (k) => setRows((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-viewport)' }}>
      <Header />
      <GoalBand />
      <KartaView
        phases={phases}
        rows={rows}
        onToggleRow={toggleRow}
        onOpen={openDrawer}
        swimlanes={swimlanes}
      />
      <Drawer idx={sel} rawPhase={sel >= 0 ? rawPhases[sel] : null} onClose={closeDrawer} />
    </div>
  );
}
