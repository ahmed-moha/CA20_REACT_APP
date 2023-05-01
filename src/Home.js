import { useState } from 'react'
import Avatar from './Avatar'
import Posts from './Posts'



function Home() {
    // const posts=[
    //     {
    //         id:1,
    //         post:"some text"
    //     },
    //     {
    //         id:2,
    //         post:"some text 2"
    //     }
    // ]
    // const name="Ahmed";
    const [name, setName] = useState("CA209 POST");
    const [age, setAge] = useState(30);
    const [counter,setCounter]=useState(0);

    const onClick = () => {
        setName("MARYAM")
        console.log("HELLO", name);
    }

    return (
        <div>

            <h1 style={{}}> {name}</h1>

            <ul >
                {/* <Posts   xog={posts}  title="Hellow"/> */}
                {/* <Avatar imageUrl={"https://i.imgur.com/1bX5QH6.jpg"}/>
           <Avatar imageUrl={"https://i.imgur.com/1bX5QH6.jpg"} /> */}

                <button onClick={() => {
                    onClick()
                }} >Ku dhufo ME</button>
            </ul>
            <p>{age}</p>
            <button onClick={() => setAge(90)}> Update Age</button>

            <h1>Counter: {counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Update Counter</button>

        </div>
    )
}

export default Home
