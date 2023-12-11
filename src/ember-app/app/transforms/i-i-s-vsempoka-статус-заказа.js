import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусЗаказаEnum from '../enums/i-i-s-vsempoka-статус-заказа';

export default FlexberryEnum.extend({
  enum: СтатусЗаказаEnum,
  sourceType: 'IIS.Vsempoka.СтатусЗаказа'
});
