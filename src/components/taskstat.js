const TaskStats = ({ taskstat }) => {
    
    const { completed_task, pending_task, in_progress } =  taskstat 

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        {/* Total Tasks */}
        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">In Progress</h2>
          <p className="text-3xl font-bold">{in_progress}</p>
        </div>
  
        {/* Completed Tasks */}
        <div className="bg-green-700 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Completed</h2>
          <p className="text-3xl font-bold">{completed_task}</p>
        </div>
  
        {/* Pending Tasks */}
        <div className="bg-yellow-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Pending</h2>
          <p className="text-3xl font-bold">{pending_task}</p>
        </div>
      </div>
    );
  };

export default TaskStats