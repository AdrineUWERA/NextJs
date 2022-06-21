import Head from 'next/head'
import Link from 'next/link';
import styles  from '../../styles/Adu.module.css'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    return {
        props:{todos: data}
    }
}

const Adus = ({ todos }) => {

    return (
        <>
        <Head>
        <title>Adu List | Home</title>
        <meta name="keywords" content="adu"/>
        </Head>
        <div>
            <h1>Adu's Bucket List</h1>
            {todos.map(todo => (
                <Link href={"/adu/" + todo.id} key={todo.id}>
                    <a className={styles.single}>
                        <h3>{todo.title}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
    );
}
 
export default Adus;