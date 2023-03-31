export enum ValidateFieldMessages {
  CarNameRequired = 'Car name cannot be empty!',
  BrandNameRequired = 'Brand name cannot be empty!',
  ColorRequired = 'Color cannot be empty!',
  QuantityFormat = 'Quantity must be a positive number!',
  QuantityRequired = 'Quantity cannot be empty!',
  ImageRequired = 'Image cannot be empty!'
}

export enum ServerErrMessages {
  ServerResponseError = 'The server is not responding. Please try again!',
  ServerGetError = 'The server does not respond. Retrieving data failed!',
  ServerDeleteError = 'Delete failed. Please try again!',
  ServerEditError = 'Edit failed. Please try again!',
  ServerSearchError = 'Search failed. Please try again after!'
}
