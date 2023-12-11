import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vsempoka-форм-рез-пост', 'Unit | Model | i-i-s-vsempoka-форм-рез-пост', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vsempoka-докум-поставки',
    'model:i-i-s-vsempoka-клиенты',
    'model:i-i-s-vsempoka-организация',
    'model:i-i-s-vsempoka-пункт-погруз',
    'model:i-i-s-vsempoka-пункт-погрузки',
    'model:i-i-s-vsempoka-список-барж',
    'model:i-i-s-vsempoka-список-контей',
    'model:i-i-s-vsempoka-т-ч-инф-о-заказе',
    'model:i-i-s-vsempoka-товары',
    'model:i-i-s-vsempoka-форм-рез-пост',
    'model:i-i-s-vsempoka-формир-распред',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
