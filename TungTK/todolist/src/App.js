import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UilCheckCircle, UilEdit, UilTrashAlt } from '@iconscout/react-unicons';
import "./App.css";
import { ArrowDown } from 'lucide-react';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [checkedStates, setCheckedStates] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    const regex = /^[A-ZÀ-Ỹ][a-zA-Zà-ỹ0-9\s]*$/;
    if (!regex.test(task)) {
      setError(true);
      setErrorMessage('Invalid input');
      return;
    }


    const dataToSave = {
      name: task
    };

    axios.post('http://localhost:9999/items', dataToSave)
      .then(response => {
        console.log(response.data);
        setTasks(prevTasks => [...prevTasks, response.data]);
        setShowScrollArrow(true); // Hiển thị mũi tên sau khi thêm công việc
      })
      .catch(error => {
        console.error('Error saving data:', error);
        // Xử lý lỗi nếu cần
      });

    setTask('');
    setError(false);
    setErrorMessage('');
  };

  const handleRemove = (index) => {
    const taskId = tasks[index].id;

    axios.delete(`http://localhost:9999/items/${taskId}`)
      .then(response => {
        console.log(response.data);
        setTasks(prevTasks => prevTasks.filter((task, i) => i !== index));
        if (tasks.length === 1) {
          setShowScrollArrow(false); // Ẩn mũi tên nếu không còn công việc
        }
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        // Xử lý lỗi nếu cần
      });
  };

  const handleEdit = (index) => {
    // Set editingIndex to the index of the task being edited
    setEditingIndex(index);
    // Set editValue to the name of the task being edited
    setEditValue(tasks[index].name);

  };
  const handleSaveEdit = () => {
    // Update the task on the server
    const regex = /^[A-ZÀ-Ỹ][a-zA-Zà-ỹ0-9\s]*$/;

    if (!regex.test(editValue)) {
      setError(true);
      setErrorMessage('Invalid input');
      return;
    }

    const taskId = tasks[editingIndex].id;
    const updatedTask = { name: editValue }; // Corrected

    axios.put(`http://localhost:9999/items/${taskId}`, updatedTask)
      .then(response => {
        console.log(response.data);
        // Xử lý thành công nếu cần
        // Update the tasks in the state
        setTasks(prevTasks => {
          const newTasks = [...prevTasks];
          newTasks[editingIndex] = response.data;
          return newTasks;
        });

        // Reset the editing state
        setEditingIndex(null);
        setEditValue('');

        // Ẩn thông báo lỗi
        setError(false);
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error updating data:', error);
        // Xử lý lỗi nếu cần
      });
  };


  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const handleTaskNameChange = (e, index) => {
    const newTasks = [...tasks];
    newTasks[index].name = e.target.value;
    setTasks(newTasks);
    setEditingTaskIndex(index);
  };

  const changeStyle = (index) => {
    setCheckedStates(prev => {
      const newCheckedStates = [...prev];
      newCheckedStates[index] = !newCheckedStates[index];
      return newCheckedStates;
    });
  };

  const handleKeyPress = (e) => {
    // Nếu phím Enter được nhấn (keyCode 13), thực hiện handleSubmit
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleKeyPress2 = (e) => {
    // Nếu phím Enter được nhấn (keyCode 13), thực hiện handleSubmit
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  useEffect(() => {
    axios.get('http://localhost:9999/items')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Lỗi khi fetch dữ liệu:', error);
      });
  }, []);

  const [showScrollArrow, setShowScrollArrow] = useState(false);
  useEffect(() => {
    const taskListContainer = document.querySelector('.taskListContainer');
    setShowScrollArrow(taskListContainer.scrollHeight > taskListContainer.clientHeight);
  }, [tasks]);

  return (
    <div className="container">
      <div className="content">
        <div className='header'>
          <h1 className="title">Todo-list</h1>
          <div className="taskInput">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={handleKeyPress}
              className="inputBox"
              placeholder="Enter a to do"
            ></input>
            <button
              onClick={handleSubmit}
              type="submit"
              style={{
                backgroundColor: "#f6bb7b",
                borderRadius: "10px",
                height: "100%",
                width: "60px",
              }}
            >
              Add
            </button>

          </div>
          {error && <p style={{ color: 'red', textAlign: "center" }}>{errorMessage}</p>}
        </div>

        <div className="taskListContainer">
          {Array.isArray(tasks) && tasks.length > 0 && tasks.map((task, index) => (
            <div className="taskList" key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="editInput"
                    onKeyDown={handleKeyPress2}
                  />
                </>
              ) : (
                <>
                  <input
                    value={task.name}
                    className={`task ${checkedStates[index] ? 'completed' : ''}`} 
                  />
                  <div className="iconList">
                    <button
                      className="checkBox"
                      onClick={() => changeStyle(index)}
                      style={{
                        display: "flex",
                        borderRadius: "50%",
                        height: "30px",
                        width: "30px",
                        justifyContent: "center",
                      }}
                    >
                      <UilCheckCircle></UilCheckCircle>
                    </button>
                    <button
                      className="editBox"
                      onClick={() => handleEdit(index)}
                      style={{
                        display: "flex",
                        borderRadius: "50%",
                        height: "30px",
                        width: "30px",
                        justifyContent: "center",
                      }}
                    >
                      <UilEdit></UilEdit>
                    </button>
                    <button
                      className="removeBox"
                      onClick={() => handleRemove(index)}
                      style={{
                        display: "flex",
                        borderRadius: "50%",
                        height: "30px",
                        width: "30px",
                        justifyContent: "center",
                      }}
                    >
                      <UilTrashAlt></UilTrashAlt>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>


        {showScrollArrow && (
          <div className='scrollIcon'>
            <ArrowDown
              onClick={() => document.querySelector('.taskListContainer').scrollTo({ top: document.querySelector('.taskListContainer').scrollHeight, behavior: 'smooth' })}
              size={30}
              color="#000"
              style={{ cursor: 'pointer' }}
            />
          </div>
        )}


      </div>
    </div>
  );
}
