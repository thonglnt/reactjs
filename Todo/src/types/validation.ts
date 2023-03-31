export interface IValidationResult {
  isValid: boolean;
  errors?: {
    name: string;
    avatar: string;
  };
}
