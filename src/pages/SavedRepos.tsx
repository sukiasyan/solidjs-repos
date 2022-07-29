import { Component, createSignal, For } from 'solid-js';
import RepoCard, { Repo } from '../components/RepoCard';

const reposFromLocalStorage = JSON.parse(
  localStorage.getItem('savedRepos') || '[]'
);
const [savedRepos, setSevedRepos] = createSignal(
  reposFromLocalStorage as Repo[]
);

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>SavedRepos</h2>
      <For each={savedRepos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};
export { savedRepos, setSevedRepos };
export default SavedRepos;
