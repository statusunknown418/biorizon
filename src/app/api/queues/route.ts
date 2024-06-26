import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

export const GET = async () => {
  const users = Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    cart: {
      id: faker.string.uuid(),
      queueId: faker.number.int({ min: 1, max: 10 }),
      items: Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        () => ({
          id: faker.number.int(),
          name: faker.commerce.productName(),
          quantity: faker.datatype.number({ min: 1, max: 10 }),
        }),
      ),
    },
  }));

  return NextResponse.json(users, { status: 200 });
};
