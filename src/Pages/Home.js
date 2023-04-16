import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {IncrementCount} from '../Pages/Actions/todoAction'
import { useParams } from 'react-router-dom'

const Home = () => {
const {id} = useParams();
console.log(id)
    const dispatch = useDispatch();
    const count = useSelector(state => state);
    console.log("count", count)
    const[countValue] = useState(0)
    const buttonClick = () => {
        dispatch(IncrementCount(count.todos.count ? count.todos.count : countValue))
    }
    
 return (
    <>
      <button onClick={buttonClick}> Click!</button>
      Value: {count.todos.count ? count.todos.count : countValue}
    </>
 );
};

export default Home;