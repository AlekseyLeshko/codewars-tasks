export default (name) =>
  name.toUpperCase().split(' ').map(str => str[0]).join('.');
