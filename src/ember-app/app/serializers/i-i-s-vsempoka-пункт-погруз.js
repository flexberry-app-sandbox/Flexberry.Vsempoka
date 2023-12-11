import { Serializer as ПунктПогрузSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vsempoka-пункт-погруз';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПунктПогрузSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
