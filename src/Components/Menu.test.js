import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

test('renders menu for logged client', () => {
  render(<BrowserRouter><Menu userLogged="true"/></BrowserRouter>);
  const labelsText = ["Home","Profile", "Users", "Logout"];
  const labels = labelsText.map(label => screen.getByText(label));
  labels.forEach((label) => {
      expect(label).toBeInTheDocument()
        console.log(label);
    })
});
