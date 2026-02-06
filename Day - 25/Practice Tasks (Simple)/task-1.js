let x = 10; // Global Scope

function test() {
  let y = 20; // Local Scope
  console.log(x); // Can access global
  console.log(y); // Can access local
}

test();

console.log(x); // OK
console.log(y); // ❌ Error (y not defined)
