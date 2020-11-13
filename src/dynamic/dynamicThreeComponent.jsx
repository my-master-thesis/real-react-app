import React, {Component} from "react";

export class DynamicThree extends Component {

  state = {
    contentArray: [
      {title: 'Povzetek'},
      {title: 'Abstract' },
      {
        title: 'Uvod',
        children: ['Motivacija']
      },
      {
        title: 'Pregled področja',
        children: [
          'Spletni programski jeziki',
          'Komponentni razvoj programske opreme',
          'Komponentni razvoj spletnih aplikacij',
          'Popularna spletna ogrodja'
        ]
      },
      {
        title: 'Primerjava komunikacije med komponentami',
        children: ['Angular', 'React', 'Vue']
      },
      {title: 'Nadgradnja komunikacije' },
      {title: 'Rezultati in testiranje' },
      {title: 'Sklepne ugotovitve' }
    ]
  }

  render() {
    const renderChildren = (children) => {
      if (children) {
        return (<ul>
          {children.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>);
      }
    }
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#e8e9ea'}}>
        <h4>Komponenta 3</h4>
        <p>Seznam poglavij dela vključen z zankami:</p>
        <ul>
          {this.state.contentArray.map((item, index) => {
            return <li key={index}>
              {item.title}
              {renderChildren(item.children)}
            </li>
          })}
        </ul>
      </div>

    );
  }
}
