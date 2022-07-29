import { Component, createEffect, For } from 'solid-js';
import { repos, username, setUsername } from '../App';
import RepoCard, { Repo } from '../components/RepoCard';

const Home: Component = () => {
  const refetchWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      '#username'
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class='mb-3' onSubmit={(event) => refetchWithUsername(event)}>
        <input type='text' class='p-1 align-middle' id='username' />
        <button class='btn btn-dark ms-3 w-auto'>Fetch</button>
      </form>
      <h3>Github repos for {username()}</h3>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
