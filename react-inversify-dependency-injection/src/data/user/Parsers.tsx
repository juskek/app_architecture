import { AltDataStoreResponse } from "./alt/AltDataStoreResponse";
import { DataStoreResponse } from "./main/DataStoreResponse";
import { User } from "./User";

const randomUserParser = (data: {
  results: DataStoreResponse[];
}): User => {
  return {
    name: {
      first: data.results[0].name.first,
      last: data.results[0].name.last,
    },
    dob: data.results[0].dob.date,
    gender: data.results[0].gender,
  };
};

export const randomUserAltParser = (data: AltDataStoreResponse): User => {
  return {
    name: {
      first: data.first_name,
      last: data.last_name,
    },
    dob: data.date_of_birth,
    gender: data.gender,
  };
};


export const Parsers = {
  randomUser: randomUserParser,
  randomUserAlt: randomUserAltParser,
}


