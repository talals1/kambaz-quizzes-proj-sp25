import { useSelector } from "react-redux";
import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInLine";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import Highlight from "./Highlight";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JSONStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import PathParameters from "./PathParameters";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import TodoList from "./todos/TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import { ListGroup } from "react-bootstrap";

export default function Lab3() {
    console.log("Hello World!");
    const { todos } = useSelector((state: any) => state.todosReducer);

    return (
        <div id="wd-lab3">
            <h2>Lab 3</h2>
            <ListGroup>
                {todos.map((todo: any) => (
                    <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
                ))}
            </ListGroup>
            <hr />
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />

            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />

            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingToFromArrays />
            <ForLoops />
            <MapFunction />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <JsonStringify />
            <House />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />

            <Classes />
            <Styles />

            <Add a={3} b={4} />
            <h4>Square of 4</h4>
            <Square>4</Square>
            <hr />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipitratione eaque illo minus cum, saepe totam vel nihil
                repellat nemo explicabo excepturi consectetur. Modi omnis minus
                sequi maiores, provident voluptates.
            </Highlight>

            <PathParameters />
        </div>
    );
}
