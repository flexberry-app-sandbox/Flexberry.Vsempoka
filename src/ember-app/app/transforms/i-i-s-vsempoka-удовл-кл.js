import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УдовлКлEnum from '../enums/i-i-s-vsempoka-удовл-кл';

export default FlexberryEnum.extend({
  enum: УдовлКлEnum,
  sourceType: 'IIS.Vsempoka.УдовлКл'
});
