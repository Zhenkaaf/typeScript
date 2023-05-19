type Status = "ok" | "loading" | "error";
const staticX: Status = "loading";

const arr: (number | string)[] = [];

function printId(id: number | string): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase);
  } else {
    console.log(id);
  }
}

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log("helllo", person.join(" "));
    return 1;
  } else {
    console.log("hello", person);
    return person;
  }
}

type Level = "junior" | "middle" | "senior";

export interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

// create a function that change level of incoming developer
function gradeDeveloper(user: { level: Level}, newLevel: Level) {
  user.level = newLevel;
}
const dev1: Developer = {
    level: 'junior',
    login: 'kris',
    skills: ['js, ts'],
}
gradeDeveloper(dev1, 'middle');
