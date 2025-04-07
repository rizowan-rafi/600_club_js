// characteristics of js and how js code is executed.
//Q1
/*
the browser has V8 engine which runs JavaScript code.first the v8 engine parses the JavaScript code.then the interpreter reads the code quickly line by line and starts running it.then Profiler identify the repeated code also known as hot code and JIT compiler compiles the code in machine code which is helpful to execute the code very swiftly.after executing the code ,we can see the output
*/

// Q2
/*
JavaScript is a high-level, single-threaded, dynamically typed, prototype-based, multi-paradigm programming language that runs primarily in web browsers. It supports Just-In-Time (JIT) compilation for fast execution and includes automatic garbage collection to manage memory efficiently.
*/

//Q3
/*
source code -> interpreter -> intermediate code(like bytecode) -> JIT compiler ->check does the code need optimization? -> if no then execute  as it is -> end
                                                                                                                        -> if yes then optimize code -> compile to native machine code -> execute native machine code -> end 
*/

//Q4
/*
When you create variables or objects, JavaScript automatically allocates memory for them. The engine keeps track of the allocated memory and the references to that memory.
Garbage collection is the automatic process of reclaiming memory that is no longer in use. JavaScript engines use automatic garbage collection to manage memory, which reduces the chances of memory leaks.
The most common garbage collection technique in JavaScript is the Mark-and-Sweep algorithm where The garbage collector identifies all the objects that are still in use. It starts from the root objects (global objects, local variables, etc.) and traverses all objects that can be reached directly or indirectly.Any object that is reachable from these roots is "marked" as alive.(Mark Phase)Once all reachable objects are marked, the garbage collector sweeps through memory and frees up the objects that were not marked as alive(Sweep phase)
*/