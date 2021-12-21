var a = 1;
function sum (a, b) {
    return a + b;
}
// 导出方式一
export var num = 10;
export function print (a) {
    console.log(a);
}


// 导出方式二

export { a, sum };

// export default
var defvar = "你好";
export default defvar