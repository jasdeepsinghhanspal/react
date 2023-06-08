import React from 'react';

// Functional Component Creator
const MyComponent = () => {
  return <div>Hello, World!</div>;
};

// Class Component Creator
class MyClassComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export { MyComponent, MyClassComponent };
