import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Category from './subComponents/Category';
import '../styles/home.css'
import ItemContainer from './ItemContainer';
import { useDispatch, useSelector } from 'react-redux';
import { descriptionContext } from '../context/description';
import { fetchDataActionCreator, setCurrentDisplayData } from '../redux/action/data';
import { setCart } from '../redux/action/cart';

function Home() {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);

  const [description, setDescription] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('/data.json');
      setCategory(res.data.categories);

      dispatch(fetchDataActionCreator(res.data));

    }
    getData();

    const localCart = localStorage.getItem("cart");
    if (localCart) {
      dispatch(setCart(JSON.parse(localCart)))
    }
  }, [])

  useEffect(() => {
    if (data.completeData !== '') {
      dispatch(setCurrentDisplayData());
    }
  }, [data.completeData]);
  return (
    <descriptionContext.Provider value={{ description, setDescription }}>
      <div>
        <div className='categories'>
          {
            category.map((ele) => {
              return (
                <Category key={ele} value={ele} />
              )
            })
          }
        </div>
        <div className='main'>


          <ItemContainer />


        </div>
      </div>
    </descriptionContext.Provider>
  )
}

export default Home