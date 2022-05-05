import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

test('renders menu for logged client', () => {
  render(<BrowserRouter><Menu userLogged={true}/></BrowserRouter>);
  const home = screen.getByText(/Home/i);
  const profile = screen.getByText(/Profile/i);
  const users = screen.getByText(/Users/i);
  const logout = screen.getByText(/Logout/i);

  expect(home).toBeInTheDocument();
  expect(profile).toBeInTheDocument();
  expect(users).toBeInTheDocument();
  expect(logout).toBeInTheDocument();
});

test('renders menu for unlogged client', () => {
    render(<BrowserRouter><Menu userLogged={false}/></BrowserRouter>);
    const home = screen.getByText('Home');
    const login = screen.getByText('Login');
    const signup = screen.getByText('Signup');

    expect(home).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(signup).toBeInTheDocument();
  });
  