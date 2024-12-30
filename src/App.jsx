import List from "./List";

function App() {
    
    const fruits =[{id: 1, name:"apple", calories:52},
                   {id: 2, name:"orange", calories:47},
                   {id: 3, name:"banana", calories:89},
                   {id: 4, name:"kiwi", calories:61},
                   {id: 5, name:"pineapple", calories:50},];

    const vegetables =[{id: 1, name:"potato", calories:77},
                      {id: 2, name:"tomato", calories:18},
                      {id: 3, name:"carrot", calories:41},
                      {id: 4, name:"broccoli", calories:34},
                      {id: 5, name:"spinach", calories:23},];                   

    return(
        <>
           {fruits.length > 0 & <List items={fruits} category="Fruits"/>}
           {vegetables.length > 0 & <List items={vegetables} category="Vegetables"/>}
        </>);
}

export default App
