import React, {FC, useCallback, useMemo, useState} from "react";

export default {
    title: 'React.memo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

/*
const UsersSecret= (props: {users: citiesType[]}): JSX.Element[] => {

    return (
        props.users.map((el, i) => <option key={i}>{el.name}</option>)
    )
}
*/


/*
export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Rita', 'Gerard', 'Kanye']);
    const addUser = () => {
        const newUsers = [...users, 'Sveta'];
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
*/

/*
export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                let fakeVal = Math.random()
            }
            tempResultA *= i;
        }

        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}
*/

/*
// @ts-ignore
const Users = React.memo(UsersSecret);
*/

/*
export const HelpsReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Rita', 'Gerard', 'Kanye', 'Ye']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta'];
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
*/

/*
type citiesType = {
    countryId: number,
    name: string,
    population: number
}

export const InputwithMemo = () => {
    debugger;
    const [counter, setCounter] = useState(0);
    const [cities, setCities] = useState<citiesType[]>([
        {countryId: 1, name: 'Minsk', population: 3000000},
        {countryId: 1, name: 'Brest', population: 1000000},
        {countryId: 1, name: 'Vitebsk', population: 500000},
        {countryId: 2, name: 'Kiev', population: 5000000},
        {countryId: 2, name: 'Lvov', population: 3000000},
        {countryId: 2, name: 'Donetsk', population: 2000000},
        {countryId: 3, name: 'Moscow', population: 10000000},
        {countryId: 3, name: 'Saratov', population: 3000000},
        {countryId: 3, name: 'Samara', population: 2000000},
    ]);

    const newArrayFilterM: citiesType[] = useMemo(() => {
        return cities.filter(u =>
            u.name.toLowerCase().indexOf('m') > -1 )
    }, [cities])

    const newArrayFilterPopulation: citiesType[] = useMemo(() => {
        return cities.filter(u =>
            u.population >= 5000000 )
    }, [cities])

    return <>
        <select name={'citiesWithM'}>
            <Users users={newArrayFilterM}/>
        </select>
        <select name={'citiesPopulation'}>
            <Users users={newArrayFilterPopulation}/>
        </select>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <div>
            {counter}
        </div>
    </>
}
*/

export const UseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'Redux', 'JS', 'Css']);
    console.log('UseCallback')
    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])

    const addBook = () => {
        const newBook = [...books, 'TS'];
        setBooks(newBook);
    }
    const rememberAddBook = useMemo(() => addBook, [books]);

    const callbackAddBook = useCallback(addBook, [books]);


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book books={newArray} addBook={callbackAddBook}/>
    </>
}
const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {
            props.books.map((el, i) => <option key={i}>{el}</option>)
        }</div>
}
const Book = React.memo(BooksSecret);