export class Company {
    id: number;
    name: string;
    description: string;
    city: string;
    address: string;
  }
  
  export class LoginResponse {
    token: string;
  }
  export class Vacancy {
    id: number;
    name: string;
    description: string;
    salary: Float32Array;
    address: string;
    company: Company;
  }