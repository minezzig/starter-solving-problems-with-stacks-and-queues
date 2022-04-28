const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
  if (Object.keys(graph).length === 0) return false;
  if (startUser === endUser) return true;

  const enqueued = [startUser];
  const discovered = new Queue();
  discovered.enqueue(startUser);

  while(discovered.first) {
    let user = discovered.dequeue();
    for(let followedUser of graph[user]) {
        if(followedUser === endUser) return true;
        if(!enqueued.includes(followedUser)) {
            enqueued.push(followedUser);
            discovered.enqueue(followedUser)
        }
    }
   
  }
  return false;
};

const G = {
  A: ["B", "C"],
  B: ["F", "D"],
  C: ["E"],
  D: ["C", "B"],
  E: ["D", "F"],
  F: [],
};
console.log(connected(G, "A", "E"));

module.exports = connected;
