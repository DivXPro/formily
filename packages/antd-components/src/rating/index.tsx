import { connect } from '@xformily/react-schema-renderer'
import { Rate } from 'antd'
import { mapStyledProps } from '../shared'

export const Rating = connect({
  getProps: mapStyledProps
})(Rate)

export default Rating
