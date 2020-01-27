import React from 'react';

const AddTask = ({ onChange }) => {
  const keyPressHandler = ev => {
    if (
      ev.target.value.trim() !== '' &&
      ev.key === 'Enter' &&
      typeof onChange === 'function'
    ) {
      onChange(ev.target.value);
      ev.target.value = '';
    }
  };
  return (
    <div>
      <input
        placeholder="Add new task..."
        className="add-task"
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};

export default AddTask;
