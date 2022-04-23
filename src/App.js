import React from "react";
const initListData = [];

for (let i = 0; i < 10; i++) {
  initListData.push({ text: i, id: i });
}

const ListItem = ({ text, onMoveUp, onMoveDown, index }) => (
  <div>
    <span>{text}</span>
    <button style={{ margin: '0px 20px' }} onClick={() => onMoveUp(index)}>Move Up</button>
    <button onClick={() => onMoveDown(index)}>Move Down</button>
  </div>
);

class List extends React.Component {
  state = {
    listData: initListData
  };

  handleMoveUp = (index) => {
    const listData = [...this.state.listData];
    if (index === 0) {
      listData.push(listData.shift());
    } else {
      const temp = listData[index]
      listData[index] = listData[index-1]
      listData[index-1] = temp
    }
    this.setState({
      listData: listData
    });
  };

  handleMoveDown = (index) => {
    const listData = [...this.state.listData];
    if (index === listData.length-1) {
      listData.unshift(listData.pop());
    } else {
        const temp = listData[index]
        listData[index] = listData[index+1]
        listData[index+1] = temp
    }
    this.setState({
      listData: listData
    });
  };

  render() {
    const { listData } = this.state;
    return (
      <div>
        {listData.map(({ text, id }, index) => (
          <ListItem
            text={text}
            index={index}
            key={text}
            onMoveUp={this.handleMoveUp}
            onMoveDown={this.handleMoveDown}
          />
        ))}
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}
