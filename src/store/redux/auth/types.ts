export interface AuthState {
  values: {
    email: string
    password: string
    username?: string
    checkbox?: boolean
  }
  errors: {
    email?: string
    password?: string
    username?: string
  }
  registrationSent: boolean
  registrationConfirmed: boolean
  message: string
}
