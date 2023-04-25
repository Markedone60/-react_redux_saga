import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { servicesDownloadRequest } from '../../redux/actionCreators';
import Item from './item';

export default function ListLogic() {

  const {items, loading, error} = useSelector(state => state.services);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(servicesDownloadRequest(''));
  }, []);

  const handleRetry = e => dispatch(servicesDownloadRequest(''));

  return (
    <>
      <section className="list-section">
        {loading && <progress />}
        {!loading && !error &&
          <ul className="list">
            {items.map((a,i) => <Item key={i} obj={a} dispatch={dispatch} />)}
          </ul>
        }
        {error &&
          <div className="error">
            <span className="text-error">Произошла ошибка</span>
            <button type="button" className="button-retry" onClick={handleRetry}>Повторить запрос</button>
          </div>
        }
      </section>
    </>
  )
}
