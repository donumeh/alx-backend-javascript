import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => {return divideFunction(10, 1)}));
console.log(guardrail(() => {return divideFunction(10, 0)}));
