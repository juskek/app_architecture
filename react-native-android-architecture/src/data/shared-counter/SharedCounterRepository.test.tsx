import { SharedCounterRepository } from "./SharedCounterRepository";



it('adds 1 + 2 to equal 3', () => {
  const repository = new SharedCounterRepository();
  repository.increment();
  expect(repository.count).toBe(1);
});

