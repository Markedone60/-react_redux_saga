import Search from './search/search';
import ListLogic from './list/listLogic';

export default function MainPage() {
  return (
    <>
      <h2 className='header'>Task 1</h2>
      <div className='task'>Search</div>
      <Search />
      <h2 className='header'>Task 2</h2>
      <div className='task'>List of items</div>
      <ListLogic />
    </>
  )
}
