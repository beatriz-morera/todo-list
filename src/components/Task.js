import React, { useCallback } from 'react';

import { Checkbox, Icon } from 'antd';

const Task = ({ onToggleComplete, task, onRemove }) => {
  const changeHandler = useCallback(() => {
    if (onToggleComplete) {
      onToggleComplete(task);
    }
  }, [task, onToggleComplete]);

  const removeHandler = useCallback(() => {
    if (onRemove) {
      onRemove(task);
    }
  }, [task, onRemove]);

  return (
    <div className="task-container">
      <Checkbox onChange={changeHandler} checked={task.completed} />
      <div className="task">
        <h4
          className="task-description"
          style={{ textDecoration: task.completed ? 'line-through' : '' }}
        >
          {task.text}
        </h4>
      </div>

      <Icon type="delete" onClick={removeHandler} />
    </div>
  );
};

export default Task;
