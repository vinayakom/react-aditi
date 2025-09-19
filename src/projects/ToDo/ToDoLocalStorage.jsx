const localStorageTask = "tasks";

export const getLocalStorageTasks = () => {
    const savedTasks = localStorage.getItem(localStorageTask);
    if (!savedTasks) return [];
    return JSON.parse(savedTasks);
};

export const setLocalStorageTasks = (task) => {
    return localStorage.setItem(localStorageTask, JSON.stringify(task));
};