import { createContext } from "react";

const ThemeContext = createContext('darkMode')//context API created and can be used anywhere with help of useContext() hook

export default ThemeContext;

//context api just ek global variable creation mein help karta hai
//so that variable or function can be accessed globally without passing props / prop drilling