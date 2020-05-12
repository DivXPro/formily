import {
  registerFormComponent,
  registerFormItemComponent
} from '@xformily/react-schema-renderer'
import { AntdSchemaFormAdaptor } from './Form'
import { AntdSchemaFieldAdaptor } from './FormItem'

registerFormComponent(AntdSchemaFormAdaptor)

registerFormItemComponent(AntdSchemaFieldAdaptor)

export { AntdSchemaFormAdaptor, AntdSchemaFieldAdaptor }
