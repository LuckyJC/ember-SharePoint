import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title(i) { return `Todo title ${i + 1}`; },
    isCompleted: faker.list.random(true, false)
});
