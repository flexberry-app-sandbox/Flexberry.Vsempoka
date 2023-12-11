import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерРаспред: DS.attr('number'),
  докумПоставки: DS.belongsTo('i-i-s-vsempoka-докум-поставки', { inverse: null, async: false }),
  пунктПогруз: DS.belongsTo('i-i-s-vsempoka-пункт-погруз', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-vsempoka-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-vsempoka-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-vsempoka-формир-распред.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерРаспред: {
    descriptionKey: 'models.i-i-s-vsempoka-формир-распред.validations.номерРаспред.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-vsempoka-формир-распред.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогруз: {
    descriptionKey: 'models.i-i-s-vsempoka-формир-распред.validations.пунктПогруз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-vsempoka-формир-распред.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-vsempoka-формир-распред.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспредE', 'i-i-s-vsempoka-формир-распред', {
    номерРаспред: attr('Номер распред', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    докумПоставки: belongsTo('i-i-s-vsempoka-докум-поставки', 'Докум поставки', {
      дата: attr('Дата', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'дата' }),
    пунктПогруз: belongsTo('i-i-s-vsempoka-пункт-погруз', 'Пункт погруз', {
      наим: attr('Наим', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наим' }),
    списокКонтей: belongsTo('i-i-s-vsempoka-список-контей', 'Список контей', {
      наимКонтей: attr('Наим контей', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наимКонтей' }),
    списокБарж: belongsTo('i-i-s-vsempoka-список-барж', 'Список барж', {
      производитель: attr('Производитель', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'производитель' })
  });

  modelClass.defineProjection('ФормирРаспредL', 'i-i-s-vsempoka-формир-распред', {
    номерРаспред: attr('Номер распред', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    докумПоставки: belongsTo('i-i-s-vsempoka-докум-поставки', 'Дата', {
      дата: attr('Дата', { index: 2 })
    }, { index: -1, hidden: true }),
    пунктПогруз: belongsTo('i-i-s-vsempoka-пункт-погруз', 'Наим', {
      наим: attr('Наим', { index: 3 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-vsempoka-список-контей', 'Наим контей', {
      наимКонтей: attr('Наим контей', { index: 4 })
    }, { index: -1, hidden: true }),
    списокБарж: belongsTo('i-i-s-vsempoka-список-барж', 'Производитель', {
      производитель: attr('Производитель', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
