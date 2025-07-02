export let Batch = () => {
    const students = ["rahul", "keshav", "satwik"];
    return (
        <>
            <h1> how many students are there in the batch?</h1>
            <Cordinator studentlist={students} />
        </>
    );
};

let Cordinator = (props) => {
    console.log(props);
    return (
        <>
            <h1> student {props.studentlist[0]}</h1>
        </>
    );
};