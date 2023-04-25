import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { servicesDownloadRequest, servicesinitState } from '../../redux/actionCreators';

export default function ListDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {items, loading, error} = useSelector(state => state.services);

  useEffect(() => {
    dispatch(servicesDownloadRequest(`${id}`));
  }, []);

  const handleRetry = e => dispatch(servicesDownloadRequest(`${id}`));
  const handleInit = e => dispatch(servicesinitState());

  return(
    <>
      <section className="list-details-section">
        {loading && <progress />}
        {!loading && !error ?
          <div className="list-details">
            <span className="item-name">Наименование услуги: {items.name}</span>
            <span className="item-price">Стоимость услуги: {items.price}</span>
            <span className="item-content">Подробно: {items.content}</span>
          </div>
          : undefined}
        {error ?
          <div className="list-error">
            <span className="error">Произошла ошибка</span>
            <button type="button" className="button-retry" onClick={handleRetry}>Повторить запрос</button>
          </div>
          : undefined
        }
        <Link className="link-main" to="/" onClick={handleInit} >На главную</Link>
      </section>
    </>
  )
}
