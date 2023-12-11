import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-vsempoka-клиенты', { inverse: null, async: false }),
  товары: DS.belongsTo('i-i-s-vsempoka-товары', { inverse: null, async: false }),
  докумПоставки: DS.belongsTo('i-i-s-vsempoka-докум-поставки', { inverse: 'тЧИнфОЗаказе', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-vsempoka-т-ч-инф-о-заказе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-vsempoka-т-ч-инф-о-заказе.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-vsempoka-т-ч-инф-о-заказе.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-vsempoka-т-ч-инф-о-заказе.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧИнфОЗаказеE', 'i-i-s-vsempoka-т-ч-инф-о-заказе', {
    количество: attr('Количество', { index: 0 }),
    клиенты: belongsTo('i-i-s-vsempoka-клиенты', 'Клиенты', {
      наимЗаказа: attr('Наим заказа', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наимЗаказа' }),
    товары: belongsTo('i-i-s-vsempoka-товары', 'Товары', {
      наимТовара: attr('Наим товара', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наимТовара' })
  });
};
