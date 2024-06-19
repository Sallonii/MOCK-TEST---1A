import {Component} from 'react'

import './index.css'

import TabItem from '../TabItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  tabClicked = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state
    const activeItem = languageGreetingsList.find(
      eachItem => eachItem.id === activeTabId,
    )
    const {imageUrl, imageAltText} = activeItem

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="card-heading">Multilingual Greetings</h1>
          <ul className="tab-ul-container">
            {languageGreetingsList.map(eachTab => (
              <TabItem
                tabDetails={eachTab}
                tabClicked={this.tabClicked}
                isActive={activeTabId === eachTab.id}
              />
            ))}
          </ul>
          <img src={imageUrl} alt={imageAltText} className="tab-image" />
        </div>
      </div>
    )
  }
}

export default Greetings
