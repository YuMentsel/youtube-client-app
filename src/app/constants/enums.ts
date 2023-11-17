export enum Period {
  week = 6.048e8,
  month = 2.6298e9,
  halfYear = 1.57788e10,
}

export enum SortType {
  date = 'date',
  views = 'views',
}

export enum Direction {
  asc = 'asc',
  desc = 'desc',
}

export enum LoginFormErrorMessages {
  login = 'Please enter a login email',
  loginValid = 'The login email is invalid',
  password = 'Please enter a password',
  passwordValid = `Your password isn't strong enough (min 8 characters, uppercase and lowercase letters, numbers, special character)`,
}

export enum AdminFormErrorMessages {
  title = 'Please enter a title',
  titleMin = 'The title is too short',
  titleMax = 'The title is too long',
  descriptionMax = 'The description is too long',
  image = 'Please enter a link to the image',
  video = 'Please enter a link to the video',
  date = 'Please enter a creation date',
  dateValid = 'The date is invalid',
  tags = 'Please enter a tag',
}

export enum Colors {
  red = '#EB5757',
  yellow = '#F2C94B',
  green = '#27AE61',
  blue = '#2979FF',
}

export enum ENV {
  BASE_URL = 'https://www.googleapis.com/youtube/v3/',
  API_KEY = 'AIzaSyB7gWqqflGGkeV_rl_vNwHoNUcvyuwvLkw',
}
