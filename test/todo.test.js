const { tasks, addTask, removeTask } = require('./todo');

describe('Todo App', () => {
  beforeEach(() => {
    // Clear tasks before each test
    tasks.length = 0;
  });

  test('Adding a task', () => {
    addTask('Task 1');
    expect(tasks).toContain('Task 1');
  });

  test('Removing a task', () => {
    tasks.push('Task 2');
    removeTask('Task 2');
    expect(tasks).not.toContain('Task 2');
  });

  test('Removing a non-existent task', () => {
    tasks.push('Task 3');
    removeTask('Task 4'); // Task 4 doesn't exist
    expect(tasks).toContain('Task 3'); // Task 3 should still be present
  });

  test('Adding tasks with special characters', () => {
    addTask('Task with spaces');
    addTask('Task with @ symbol');
    addTask('Task with # symbol');
    expect(tasks).toContain('Task with spaces');
    expect(tasks).toContain('Task with @ symbol');
    expect(tasks).toContain('Task with # symbol');
  });

  test('Adding and removing multiple tasks', () => {
    addTask('Task A');
    addTask('Task B');
    addTask('Task C');
    expect(tasks).toHaveLength(3);

    removeTask('Task B');
    expect(tasks).not.toContain('Task B');
    expect(tasks).toHaveLength(2);

    removeTask('Task D'); // Task D doesn't exist
    expect(tasks).toHaveLength(2); // No change
  });

  // You can add more tests for your specific Todo app features here
});
