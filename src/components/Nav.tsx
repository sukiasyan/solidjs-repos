import { NavLink } from 'solid-app-router';
import { Component, createEffect, createSignal } from 'solid-js';
import { savedRepos } from '../pages/SavedRepos';

const Nav: Component = () => {
  return (
    <nav class='mt-5 mb-3'>
      <NavLink
        href='/'
        end
        class='btn btn-primary me-2'
        activeClass='btn-success'
      >
        Home
      </NavLink>
      <NavLink
        href='savedrepos'
        class='btn btn-primary me-2'
        activeClass='btn-success'
      >
        Saved ~ {savedRepos().length}
      </NavLink>
    </nav>
  );
};

export default Nav;
