export class UserLocalDataSource {
    private name: string | null = null;

    getName(): string | null {
        return `Returning name from offline data source: ${this.name}`
    }

    setName(name: string): void {
        this.name = name;
    }
}