import React from 'react';

import { Checkbox, Icon } from 'antd';

const Task = ({ completed, task, remove }) => {
  return (
    <div className="task-container">
      <Checkbox onChange={completed} />
      <div className="task">
        <h4 className="task-description">{task}</h4>
      </div>

      <Icon type="delete" onClick={remove} />
    </div>
  );
};

export default Task;
