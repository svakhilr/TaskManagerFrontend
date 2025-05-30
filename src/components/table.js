import React from 'react';

// const tasks = [
//   {
//     title: 'Design Landing Page',
//     description: 'Create layout for marketing site',
//     dueDate: '2025-06-10',
//     priority: 'High',
//     status: 'Pending'
//   },
//   {
//     title: 'Fix Login Bug',
//     description: 'Resolve user session timeout issue',
//     dueDate: '2025-06-02',
//     priority: 'Medium',
//     status: 'In Progress'
//   },
//   {
//     title: 'Deploy API',
//     description: 'Push latest version to production',
//     dueDate: '2025-06-05',
//     priority: 'High',
//     status: 'Completed'
//   },
// ];

const TaskTable = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Due Date</th>
              <th scope="col" className="px-6 py-3">Priority</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={idx} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{task.title}</td>
                <td className="px-6 py-4">{task.discription}</td>
                <td className="px-6 py-4">{task.due_date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    task.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    task.status === 'pending' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300' :
                    task.status === 'in_progress' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' :
                    'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
