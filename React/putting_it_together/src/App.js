import Child from './Components/Child';
import './App.css';

function App() {

    
  const people = [
    {
    firstName: "Matt",
    lastName: "Nicole",
    age: 28,
    hairColor: "Black",
    },
    {
    firstName: "Ahmad",
    lastName: "Sediqzada",
    age: 30,
    hairColor: "Brown",
    }
      ]
        
  
  
    return(
      < div className="App" >

        {/* <Child
        firstName={people[0].firstName}
        lastName={people[0].lastName}
        age={people[0].age}
        hairColor={people[0].hairColor}
        />

        <Child
        firstName={people[1].firstName}
        lastName={people[1].lastName}
        age={people[1].age}
        hairColor={people[1].hairColor}
        /> */}

      {
        people.map((object, index) => (

        <Child key={index}
        firstName={object.firstName}
        lastName={object.lastName}
        age={object.age}
        hairColor={object.hairColor}
        />

        ))
      }
        
      </div>
  )
};

export default App;
