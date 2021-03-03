import { gql } from '@apollo/client';

export const FETCH_TASKS = gql`
  query fetchTasks($condition: TaskCondition) {
    allTasks(condition: $condition, orderBy: COMPLETED_AT_DESC) {
      nodes {
        id
        createdAt
        updatedAt
        deletedAt
        completedAt
        task
      }
    }
  }
`;

export const UPDATE_TASK_BY_ID = gql`
  mutation updateTaskById($input: UpdateTaskByIdInput!) {
    updateTaskById(input: $input) {
      task {
        id
      }
    }
  }
`;
