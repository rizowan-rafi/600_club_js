// call stack,web api,callback queue, event loop
//Q1
/*
event loop continuously checks if the call stack is empty or not.if not empty,it waits.else  it will check the callback queue.if callback queue is not empty, it will put the callback queue tasks in call stack in FIFO manner.

*/

//Q2
/*
call stack vs callback queue

call stack: it is a stack  where function calls are pushed and popped. it is used to manage the execution of JavaScript code in LIPO manner.

callback queue: it is a queue  where callback functions are pushed and popped. it is used to manage the execution of asynchronous JavaScript code FIFO manner.
*/

//Q3

/*
when any asynchronous task appears in js code, it first goes to web api. in web api, it will do the work and wait fo the result.when it gets the result, it will push the result in callback queue.the event loop continuously check the call stack and if it is empty, it will push the callback queue task in call stack.then it executes the task and we can see the result.this is how the single threaded javascript handle the asynchronous task.
*/