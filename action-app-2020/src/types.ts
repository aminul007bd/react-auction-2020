export  interface UserInterface {
  id: number
  email: string
  phone_number: string
  bid_status: string
  bid_amount: number
  appointment_date: string
  first_name: string
  last_name: string
}

export enum FetchStates {
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  IDLE = 'IDLE',
  RESOLVED = 'RESOLVED',
}
