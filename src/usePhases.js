import { useState } from 'react';
import { PHASES as DEFAULT_PHASES } from './phases.js';

/**
 * Static, read-only journey data. This is a view-only prototype: there is no
 * way to add/remove/edit phases or swimlanes from the UI, so the data always
 * comes straight from the source (phases.js / the flow's own phase list) —
 * no persistence, no stale localStorage snapshots.
 */
export function useJourneyData(initialPhases = DEFAULT_PHASES) {
  const [data] = useState(() => ({
    phases: JSON.parse(JSON.stringify(initialPhases)),
    swimlanes: []
  }));

  return {
    phases: data.phases,
    swimlanes: data.swimlanes
  };
}
