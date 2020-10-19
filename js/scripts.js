const acl_concrete_dominated = (concrete, effective) => {
  const concreteDivide = concrete.split("/");
  const effectiveSeparate = effective.split(":");
  let result = false;
    try {
      for (let item of effectiveSeparate) {
        const effectiveDivide = item.split("/");
        if (concreteDivide[1] === effectiveDivide[1]) {
          const concreteAccess = concreteDivide[0].split("");
          const effectiveAccess = effectiveDivide[0].split("");
          const intersectAccess = concreteAccess.filter(el => effectiveAccess.includes(el));

          if (concreteAccess.join("") === intersectAccess.join("")) {
            result = true;
          }

        }
      }
      return `${concrete} by ${effective} => ${result}`;
    }

    catch(error) {
      console.log(error)
    };
}


console.log(`Dominated or not ${acl_concrete_dominated("G/Time", "G/Time:GDP/Users")}`);
console.log(`Dominated or not ${acl_concrete_dominated("D/Users", "G/Time:GDP/Users")}`);
console.log(`Dominated or not ${acl_concrete_dominated("PD/Users", "G/Time:GDP/Users")}`);
console.log(`Dominated or not ${acl_concrete_dominated("P/Time", "G/Time:GDP/Users")}`);
console.log(`Dominated or not ${acl_concrete_dominated("H/Users", "G/Time:GDP/Users")}`);
console.log(`Dominated or not ${acl_concrete_dominated("G/Time:GDP/Users", "G/Time")}`);




