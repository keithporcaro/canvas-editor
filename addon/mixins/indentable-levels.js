import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({
  classNameBindings: ['levelClass'],

  levelClass: computed('block.meta.level', function() {
    return this.get('styles')[`level-${this.getWithDefault('block.meta.level', 1)}`];
  }),

  offsetLevel(offset) {
    const oldLevel = this.getWithDefault('block.meta.level', 1);
    const newLevel = Math.max(1, Math.min(4, offset + oldLevel));
    if (oldLevel !== newLevel) {
      this.set('block.meta.level', newLevel);
      this.get('onBlockMetaReplacedLocally')(
        this.get('block'),
        ['level'],
        oldLevel,
        newLevel);
    }
  }
});
