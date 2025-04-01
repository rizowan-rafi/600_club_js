//Q1
/*

import --> to import function, variable, class, or module from another file.
export --> to export function, variable, class, or module to another file.
to use export use export keyword before function, variable, class, or module
to use import use {} and destruction to import function, variable, class, or module like object dectruction

export --> export function sum(a,b) { return a + b; }
import --> import {sum} from '/file_path'
*/

//Q2

/*
when we want to import a function, variable, class, or module from another file using any names we use export default 
it is very useful for importing value because we can use any name to import the value

export default function sum(a,b) { return a + b; }

import add from '/file_path'
*/

//Q3
/*
    we can use as keyword to rename the export value
    export function sum(a,b) { return a + b; }
    import { sum as add } from '/file_path'
    here sum function is called add

*/

//Q4
/*
    in named export, we can import multiple values using object destruction {}.but the value names have to same as export name
    but in default export, we can import only one value and no need {} to import it and we can name it anything when importing the value
*/

//Q5

/*
    No, we can't do multiple export default from a single file.if there is multiple value to export use named export

*/



