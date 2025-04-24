// ToDo App
class TodoApp{
    constructor() {
        this.todos = []
    }
    addTodo(taskName,time,taskCategory) {
        const task = {
            id: this.todos.length + 1,
            taskName: taskName,
            taskCategory: taskCategory,
            taskTime: time,
            completed: false
        }
        this.todos.push(task)
    }

    completeTodo(taskName) {
        const task = this.todos.findIndex(t=>t.taskName===taskName)
        if (task === -1)
            return false
        this.todos[task].completed = true
        return true
    }

    removeTodo(taskName) {
        const task = this.todos.findIndex(t => t.taskName === taskName)
        if (task === -1)
            return false
        this.todos.splice(task,1)
        return true;
    }

    displayTodoList(category) {
        if (!category) {
            console.log('taskId    taskName    taskTime    taskCategory')
            this.todos.forEach(task => {
                console.log(`${task.id} ${task.taskName} ${task.taskTime} ${task.taskCategory}`)
            })
        }
        const tasks = this.todos.filter(task => task.taskCategory === category)
        console.log('taskId    taskName    taskTime    taskCategory')
        tasks.forEach(task => {
            console.log(`${task.id} ${task.taskName} ${task.taskTime} ${task.taskCategory}`)
        })
    }

    hoursWorked() {
        const totalHour = this.todos.reduce((acc, cur) =>cur.completed? acc + cur.taskTime:acc, 0)
        return totalHour;
    }

    timeNeeded() {
        const totalHour = this.todos.reduce((acc, cur) => !cur.completed ? acc + cur.taskTime : acc, 0)
        return totalHour;
    }

    editTodo(taskName, editObj) {
        const task = this.todos.findIndex(t => t.taskName === taskName)
        const isTaskEdit = false;
        if (task === -1)
            return false;
        if (editObj.taskName)
        {
            this.todos[task].taskName = editObj.taskName
            isTaskEdit = true;
        }
        if (editObj.taskTime)
        {
            this.todos[task].taskTime = editObj.taskTime
            isTaskEdit = true;

        }
        if (editObj.taskCategory)
        {
            this.todos[task].taskCategory = editObj.taskCategory
            isTaskEdit = true;

        }
        if (!isTaskEdit)
            return false;
        return true;


    }

    getTodo(taskDetail) {
        let task = this.todos.find(t=>t.taskName===taskDetail)
        if(!task)
            task = this.todos.find(t=>t.taskCategory===taskDetail)
        if (task)
            return task
        return undefined;
            
    }

    largestTodo() {
        const todo = this.todos.filter(t => t.completed === false);
        if (!todo) return false;
        const largeTodo = todo.reduce((acc, cur) =>   acc<=cur.taskTime?cur.taskTime : acc,todo[0].taskTime)
        return largeTodo;

    }
    smallestTodo() {
        const todo = this.todos.filter(t => t.completed === false);
        if (!todo) return false;
        const smallTask = todo.reduce((acc, cur) => acc >= cur.taskTime ? cur.taskTime : acc, todo[0].taskTime)
        return smallTask;
    }
    sortTodos() {
        const todo = this.todos.filter(t => t.completed === false);
        if (!todo) return false;

        todo.sort((a,b)=>b.taskTime-a.taskTime)
        return todo
    }

    undoTodo(taskName) {
        const task = this.todos.findIndex(t => t.taskName === taskName)
        if (task && this.todos[task].completed === true)
        {
            this.todos[task].completed = false
            return true;

        }
        return false;
    }

    completedPercentage() {
        const completedTask = this.todos.filter(t => t.completed === true)
        const completedPercentage = ((completedTask.length/this.todos.length)*100).toFixed(2)
        return completedPercentage;
    }

    importTodos(jsonData) {
        if(!jsonData) return 'data not found'
        const data = JSON.parse(jsonData)
        for (const d of data) {
            this.todos.push(d)
        }
    }

    clearAllTodos() {
        this.todos.splice(0,this.todos.length)
    }
}

const todo =new TodoApp()
console.log(todo)
todo.addTodo('do homework',2,'study')
console.log(todo)
todo.completeTodo('do homework')
console.log(todo)


