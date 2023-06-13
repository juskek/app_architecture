import { CounterRepository } from "./CounterRepository";



it('adds 1 + 2 to equal 3', () => {
  const repository = new CounterRepository();
  repository.increment();
  expect(repository.count).toBe(1);
});

