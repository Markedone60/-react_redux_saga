import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField } from '../../redux/actionCreators';

export default function Search() {
  const { items, loading, error, search } = useSelector(state => state.skills);
  const dispatch = useDispatch();
  
  const handleSearch = e => {
    const { value } = e.target;
    dispatch(changeSearchField(value));
  };

  const hasTask = search.trim() !== '';

  return (
    <>
      <section className='search-section'>
        <div className="search">
          <input className="search-input" type="search" value={search} onChange={handleSearch} />
        </div>
        {!hasTask && <div>Type something to search...</div>}
        {hasTask && loading && <div>searching...</div>}
        {error ?
          <div>Error occured</div>
          :
          <ul>{items.map(o =>
            <li key={o.id}>{o.name}</li>)}
          </ul>}
      </section>
    </>
  )
}
