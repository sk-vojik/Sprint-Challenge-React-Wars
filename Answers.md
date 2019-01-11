# Answers

1.  What is React JS and what problems does it try and solve?

React is a UI library that is used to create reusable code snippets so that websites are fast and scalable. React makes interactions with the users data easy and a good experience, while allowing the website to scale easily using reusable code modules on the virtual dom. By doing this, React makes websites “reactive”, giving users and developers alike a smooth experience.

 
2.  What does it mean to _think_ in react?

To think in React is thinking of your website as independent code components, that when put together, make up the website. This makes controlling the flow of data more organized, and also will make scaling the site way easier. 


3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class/stateful component is a component that is more focused on controlling the data and state of an application, and any functions that may be used by child components. These are the powerhouses of the apps that send data around so that presentational/functional components can render the data to the screen. The presentational components are concerned with how things look, and aren't as concerned as controlling state. They receive state from class components via props.



4.  Describe state.

State is the data used in the react system that components hold on to,and pass around to other components to use. When the state gets updated by the user or server, the components on the website update. Without state, our applications wouldn’t be much.


5.  Describe props.

Props are pieces or all of state that we pass to other components so that the component can use the state data to render in applications. Components receive props as an object passed in as an argument. Props are immutable - they are used merely to pass around and display them, (as opposed to state, which can be updated with setState). 