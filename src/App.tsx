import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import { createEffect, createSignal } from 'solid-js';
import Nav from './components/Nav';
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';

const [username, setUsername] = createSignal('sukiasyan')
const [repos, setRepos] =createSignal([])

const App: Component = () => {
  
  createEffect(async ()=> {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    setRepos(await res.json())
})

  return (
    <div class="container">
      <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/savedrepos' element={<SavedRepos />} />
        </Routes>
    </div>
  );
};

export {username, setUsername, repos}
export default App;
