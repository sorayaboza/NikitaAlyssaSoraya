import React from 'react';

const boardData = [
    {
        id: 0,
        progress: "TASK LIST",
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
        progress: "IN PROGRESS",
        items: [
            { id: 11, task: "Cleaning"},
        ]
    },
    {
        id: 2,
        progress: "COMPLETE",
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
