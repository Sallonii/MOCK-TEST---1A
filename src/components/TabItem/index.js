import {TabButton} from './styledComponents'

const TabItem = props => {
  const {tabDetails, tabClicked, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickingTab = () => {
    tabClicked(id)
  }

  return (
    <li className="tab-list-item">
      <TabButton type="button" isActive={isActive} onClick={onClickingTab}>
        {buttonText}
      </TabButton>
    </li>
  )
}

export default TabItem
