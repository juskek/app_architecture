export class UserRemoteDataSource {
    async getName(): Promise<string | null> {
        const response = await fetch(`https://randomuser.me/api`);
        if (!response.ok) throw new Error(response.statusText);

        const json = await response.json();
        const name = json['results'][0]['name']['first']

        return name;

    }

}