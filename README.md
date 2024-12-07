# React State Update Batching Bug

This repository demonstrates a common issue in React applications related to state update batching.  When multiple `setState` calls are made within a single event handler, React's optimization might drop subsequent updates, leading to unexpected behavior.

The `bug.js` file showcases the problem, and `bugSolution.js` provides a corrected version using the functional update approach to correctly handle multiple state updates.