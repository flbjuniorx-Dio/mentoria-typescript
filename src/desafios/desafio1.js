/* Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {};
employee.code = 10;
employee.name = "John"; */
var john = {
    code: 10,
    name: 'John Wick'
};
function printEmployee(employee) {
    console.log('Employee code = ' + employee.code);
    console.log('Employee name: ' + employee.name);
}
;
printEmployee(john);
