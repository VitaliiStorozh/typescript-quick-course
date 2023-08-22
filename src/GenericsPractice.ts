function returnKeys<T extends Object>(arg: T) {
  console.log(Object.keys(arg));
  return arg;
}

returnKeys({ a: 1, b: 2, c: 3 });

interface Person<T> {
  name: string;
  age: number;
  special: T;
}

const John: Person<string> = {
  special: 'This is my special property',
  name: 'John',
  age: 30,
};

class Observable<T extends Person<string>> {
  subscribe(arg: T) {
    console.log(`Subscribed to ${arg.name} with special ${arg.special}`);
  }
}

new Observable<typeof John>().subscribe(John);
