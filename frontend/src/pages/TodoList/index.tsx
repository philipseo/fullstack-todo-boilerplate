import React, {FunctionComponent} from 'react';
import { useQuery } from '@apollo/client';

import { FETCH_TASKS } from '@src/queries/task';
import Loader from '@components/molecules/Loader';
import ErrorReload from '@components/molecules/ErrorReload';
import TaskList from '@components/templates/TaskList';

const TodoList: FunctionComponent = () => {

  const { loading, error, data, refetch } = useQuery(FETCH_TASKS, {
    variables: {
      condition: {
        deletedAt: null,
      },
    },
  });

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorReload message={error?.message} />}
      {
        !loading && !error && data &&
        <TaskList
          data={data?.allTasks?.nodes || []}
          refetch={() => refetch()}
        />
      }
    </>
  );
}
export default TodoList;
