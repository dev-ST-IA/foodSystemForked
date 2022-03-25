
import {Option,OptionList} from './SortProductsOptions'

export default function SortOrdersOptions({setSortPreferece,defaultValue}){


return(
<OptionList  defaultValue={defaultValue} name="sortProductBy" onChange={(e) => setSortPreferece(e.target.value)}>
<Option value="-createdAt" >CreatedAt</Option>
<Option value="createdAt" >CreatedAt</Option>
<Option value="total" >total</Option>
<Option value="-total">total</Option>

</OptionList>

);

}