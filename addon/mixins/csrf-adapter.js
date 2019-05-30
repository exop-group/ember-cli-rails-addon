import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  headers: computed(function () {
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return {
      'X-CSRF-Token': token
    };
  })
});
