import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react'
// import Avatar from './Avatar'
// import Posts from './Posts'
import Counter from './Counterr';
import BookCard from './BookCard';


function Home() {
    const [books, setBooks] = useState([
        {
            title: "14 things I wish I knew at 25 (now that I’m 38)",
            body: "Lorem ipsum.....",
            author: "Ahmed",
            id: 1,
        },
        {
            title: "Stop requiring innovation heroism!",
            body: "Lorem ipsum.....",
            author: "Hassan",
            id: 2,
        },
        {
            title: "How to Become a Good Backend Engineer (Fundamentals)",
            body: "Lorem ipsum.....",
            author: "Farxiya",
            id: 3,
        },
    ])

    const deleteBook = (id) => {
        let newBooks = books.filter((book) => book.id != id);
        setBooks(newBooks);
    }
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



    // let name="Welcome CA206";
    // let [name, setName] = useState("Welcome CA206") // Reactive variable
    // let [age, setAge] = useState(23);
    // const clickMe = () => {
    //     setName("Welcome CA207")
    //     console.log("HELLO ", name);
    // }

    return (

        <div>

            {/* <h1 style={{}}>{name}</h1> */}

            <ul >
                {/* <Posts   xog={posts}  title="Hellow"/> */}
                {/* <Avatar imageUrl={"https://i.imgur.com/1bX5QH6.jpg"}/>
           <Avatar imageUrl={"https://i.imgur.com/1bX5QH6.jpg"} /> */}


            </ul>

            {/* <button onClick={clickMe} >Tap Me</button>
            <h2>{age}</h2>
            <button onClick={() => {
                setAge(90);
            }}>Update Age</button> */}
            {/* <button onClick={clickMe()}>Click Me</button> */}

            {/* <Counter/> */}

            <BookCard books={books} deleteBook={deleteBook} />
        </div>
    )
}

export default Home
