import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vsempoka-докум-поставки', 'Unit | Serializer | i-i-s-vsempoka-докум-поставки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-vsempoka-докум-поставки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-vsempoka-ед-изм',
    'transform:i-i-s-vsempoka-статус-заказа',
    'transform:i-i-s-vsempoka-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
