import PropTypes from "prop-types";
//Assign default values directly in the parameters using deconstruction
function Student({ name="Guest", age=0, isStudennt=false}){
return(
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>

);
}
//Define the expected prop types for the Student component
Student.propTypes = {
    name: PropTypes.string.isRequired, //The ProTypes.string.isRequired ensures that the name prop is a string and is required for the component to function properly.
    age: PropTypes.number.isRequired, //The ProTypes.number.isRequired ensures that the age prop is a number and is required for the component to function properly.
    isStudent: PropTypes.bool.isRequired, //The ProTypes.bool.isRequired ensures that the isStudent prop is a boolean and is required for the component to function properly.
    //the .isRequired modifier is used to indicate that the prop is required and must be provided when using the Student component. If any of these props are missing or of the wrong type, React will log a warning in the console during development, helping you catch potential issues early on.
};
export default Student;