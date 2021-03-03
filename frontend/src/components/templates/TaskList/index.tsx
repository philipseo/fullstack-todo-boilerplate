import React, { FunctionComponent } from 'react';
import { List } from '@material-ui/core';

import Task from '@src/interfaces/task';
import AddTaskForm from '@components/organisms/AddTaskForm';
import EmptyList from '@components/molecules/EmptyList';
import TaskListItem from '@components/molecules/TaskListItem';

export interface TaskListProps {
  data: Task[],
  refetch(): void;
}

const TaskList: FunctionComponent<TaskListProps> = ({
  data,
  refetch,
}) => {

  async function handleAfterAddTask() {
    await refetch();
  }

  return (
    <>
      {
        data &&
        <>
          <AddTaskForm afterAddTask={() => handleAfterAddTask()}/>
          {
            data?.length <= 0 ?
              <EmptyList message="등록된 Task가 없습니다."/>
              :
              <List>
                {
                  data.map((task: Task) => (
                    <TaskListItem
                      key={task.id}
                      task={task}
                      afterUpdateTask={()=> refetch()}
                    />
                  ))
                }
              </List>
          }
        </>
      }
    </>
  );
}
export default TaskList;
