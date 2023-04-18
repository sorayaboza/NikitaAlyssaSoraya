import React from 'react';

const taskData = [
   // Hyeran Jeon
   {
    id: 0,
    rank: 9,
    professor: 'Hyeran Jeon',
    student: "Abhilasha Dave",             
    percentage: 0.5, 
    courses : [140],
    finalized: "NO"
},      

// Marcelo Kallmann                                          `                                 
{   id: 1,
    rank: 10,
    professor: 'Marcelo Kallmann',
    student: "Ritesh Sharma",              
    percentage: 0.5,     
    courses : ['<span class="prevent">185</span>', 165, 24, 22, 100, 30, 20],
    finalized: "NO"
},
];

const TaskItems = () => {
  return (
    <div>
      {/* Add any JSX you want to render for this page */}
    </div>
  );
};

export { taskData };
export default TaskItems;
