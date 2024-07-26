import { useContext } from "react";
import MyContext from "../MyContext";

const Contact = () => {
  const {value1, value2} = useContext(MyContext);
    return <h1>{value2}</h1>;
  };
  
  export default Contact;