import { useState, createContext, useContext } from "react";
//useContext hook is used for managing the function and it depends only on useState

const UserContext = createContext();
//usecontext hook
function L1() {
  const [user, setUser] = useState("iiht");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <L2 />
    </UserContext.Provider>
  );
}

function L2() {
  return (
    <>
      <h1>Level 2</h1>
      <L3 />
    </>
  );
}

function L3() {
  return (
    <>
      <h1>Level 3</h1>
      <L4 />
    </>
  );
}

function L4() {
  return (
    <>
      <h1>Level 4</h1>
      <L5 />
    </>
  );
}

function L5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>level 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default L1;