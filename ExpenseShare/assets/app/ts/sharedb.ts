export class InMemoryDataService {



    createDb() {
        let share = [{
            id: 1, name: {
                "Currency": "$",
                "Persons": []
            }
        }];
        return { share };
    }
}
