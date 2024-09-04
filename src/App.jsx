import { Header } from './components/Header';
import  { Post }  from './Post';
import  './Styles.css';


export function App () {
  return (
     <div>
      <Header />

      <Post 
      author = 'Diego Fernandes'
      content = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Vitae voluptates corrupti maiores illo consectetur dolorum porro aspernatur doloremque, dolorem reprehenderit, provident rem unde facere pariatur facilis explicabo culpa deleniti atque?'
      />
      <Post
       author = 'José Pereira Pires'
       content = 'Olá mundo'
      />
      <Post
       author = 'Kelvin Barroso'
       content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, sapiente sed, animi rem temporibus deserunt, hic itaque debitis nostrum modi labore reprehenderit maxime aliquam possimus! Eos sapiente aspernatur quis!'
      />
     </div>
  )
}