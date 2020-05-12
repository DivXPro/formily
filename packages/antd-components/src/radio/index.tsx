import { connect } from '@xformily/react-schema-renderer'
import { Radio as AntdRadio } from 'antd'
import {
  transformDataSourceKey,
  mapStyledProps,
  mapTextComponent
} from '../shared'

export const Radio = connect<'Group'>({
  getProps: mapStyledProps,
  getComponent: mapTextComponent
})(AntdRadio)

Radio.Group = connect({
  getProps: mapStyledProps,
  getComponent: mapTextComponent
})(transformDataSourceKey(AntdRadio.Group, 'options'))

export default Radio
