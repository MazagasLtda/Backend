export class UserService {
  getAll() {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
  }
}
