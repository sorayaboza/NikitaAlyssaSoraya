import React from 'react';

const boardData = [
    {
        id: 0,
        progress: "Task List",
        items: [
            { id: 10, task: "Buy shovel"},
            { id: 20, task: "Find good spot in backyard"},
            { id: 30, task: "Bury it. Bury it deep."},
            { id: 40, task: "Get cookies for Andy :D"},
            { id: 50, task: "test for long wall of text test for long wall of text test for long wall of text test for long wall of text test for long wall of text test for long wall of text test for long wall of text "}
        ]
    },
    {
        id: 1,
        progress: "In Progress",
        items: [
            { id: 11, task: "Cleaning"},
        ]
    },
    {
        id: 2,
        progress: "Complete",
        items: []
    },
];

const Boards = () => {
  return (
    <div>
      {/* Add any JSX you want to render for this page */}
    </div>
  );
};

export { boardData };
export default Boards;
