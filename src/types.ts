export interface UserStructure {
  username: string;
  password: string;
}

export interface ExtinguisherData {
  brand: string;
  model: string;
  class: string[];
  img: string;
  usefulLife: string;
  fireExtinguishingAgent: string;
  description: string;
  disadvantages: string;
  strengths: string;
  user: string;
}

export interface ExtinguisherStructure extends ExtinguisherData {
  id: string;
}
