import { IServer } from './Server';

interface Persons {
  firstName: string;
  lastName: string;
  job?: job;
  isVisitor?: boolean;
}

type job = 'Engineer' | 'Programmer';

function generateEmail(input: Persons, force?: boolean): string | undefined {
  if (input.isVisitor && !force) {
    return undefined;
  } else {
    return `${input.firstName}.${input.lastName}@email.com`;
  }
}

const abs: string | undefined = generateEmail({} as any);

function toUpperCase(arg: string) {}
toUpperCase(abs!);

function isPerson(potentialPerson: any): boolean {
  if ('firstName' in potentialPerson && 'lastName' in potentialPerson) {
    return true;
  } else {
    return false;
  }
}

function printEmailIfPerson(potentialPerson: any): void {
  if (isPerson(potentialPerson)) {
    console.log(generateEmail(potentialPerson));
  } else {
    console.log('Input is not a person');
  }
}

printEmailIfPerson({
  firstName: 'John',
  lastNames: 'Doe',
});

async function someAsyn() {
  return 'async';
}
