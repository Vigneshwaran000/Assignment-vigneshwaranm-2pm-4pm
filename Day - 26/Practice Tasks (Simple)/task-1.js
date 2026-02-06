let a = 10; // Global Scope

function demo() {
  let b = 20; // Local (Function) Scope

  if (true) {
    let c = 30; // Block Scope
    console.log(a); // ✅ Global
    console.log(b); // ✅ Local
    console.log(c); // ✅ Block
  }

  console.log(a); // ✅
  console.log(b); // ✅
  // console.log(c); ❌ Error (c not defined)
}

demo();

console.log(a); // ✅
// console.log(b); ❌ Error
