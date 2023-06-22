const day = 'Saturday'
let output

switch (day) {
  case 'Monday':
    output = 'Start of the week'
    break
  case 'Tuesday':
    output = 'Second day of the week'
    break
  case 'Wednesday':
    output = 'Midweek'
    break
  case 'Thursday':
    output = 'Fourth day of the week'
    break
  case 'Friday':
    output = 'TGIF! End of the week'
    break
  case 'Saturday':
    output = 'Weekend relaxation'
    break
  case 'Sunday':
    output = 'Sabath Day'
    break
  default:
    output = 'Invalid day'
    break
}

console.log(output)
