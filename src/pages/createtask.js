import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requests from '../common/requests';
import Layout from '../common/layout';

function TaskCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  // Adjust these lists based on what your Django choices are
  const PRIORITY_OPTIONS = [ {'title':'Low','value':'low'},{'title':'Medium','value':'medium'},{'title':'High','value':'high'}];
  const STATUS_OPTIONS = [{'title':'Pending','value':'pending'},{'title':'In Progress','value':'in_progress'},{'title':'Completed','value':'completed'}];  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access');

    try {
      const response = await fetch(requests.createTasks, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title:title,
          discription: description,
          priority:priority,
          status:status,
          due_date: dueDate,
        }),
      });

      if (response.ok) {
        alert('Task created successfully');
        navigate('/dashboard');
      } else {
        const data = await response.json();
        alert(data.detail || 'Task creation failed');
      }
    } catch (error) {
      console.error('Error creating task:', error);
      alert('An error occurred');
    }
  };

  return (
    <Layout>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create New Task
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Task title"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Task description"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select priority</option>
                  {PRIORITY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>{option.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select status</option>
                  {STATUS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>{option.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}

export default TaskCreate;
