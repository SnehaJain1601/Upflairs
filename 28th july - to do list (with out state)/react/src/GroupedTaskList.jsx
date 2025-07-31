import task from "./data.json"
    // const groupByCategory = (data) => {
    //     return data.reduce((groups, task) => {
    //         const category = task.category;
    //         if (!groups[category]) {
    //             groups[category] = [];
    //         }
    //         groups[category].push(task);
    //         return groups;
    //     }, {});
    // };

    // const GroupedTaskList = () => {
    //     const groupedTasks = groupByCategory(task);

    //     return (
    //         <div>
    //             <h2>Tasks by Category</h2>
    //             {Object.entries(groupedTasks).map(([category, items]) => (
    //                 <div key={category}>
    //                     <h3>{category}</h3>
    //                     <ul>
    //                         {items.map((task) => (
    //                             <li key={task.id}>{task.title}</li>
    //                         ))}
    //                     </ul>
    //                 </div>
    //             ))}
    //         </div>
    //     )

    // }
    //--------------------------------------

const groupByCategory = (data) => {
  return data.reduce((groups, task) => {
    const category = task.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(task);
    return groups;
  }, {});
};

const GroupedTaskList = () => {
  const groupedTasks = groupByCategory(task);

  return (
    <div>
      <h2>Tasks by Category</h2>
      {Object.entries(groupedTasks).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {items.map((task) => (
              <li key={task.id} style={{ marginBottom: '1rem' }}>
                <div>
                  {task.completed ? '✅' : '❌'} {task.title}
                </div>
                <div style={{ fontStyle: 'italic', fontSize: '0.9em', color: '#555' }}>
                  {task.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupedTaskList;

