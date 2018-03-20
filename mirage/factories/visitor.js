import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `${faker.name.firstName(i)} ${faker.name.lastName(i)}`;
  },

  description(i) {
    return faker.lorem.paragraph(i);
  },

  signedOut(i) {
    return faker.random.boolean(i);
  },
});
