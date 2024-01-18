import { describe, test, jest, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toolbar from './Toolbar';

describe('Toolbar tests', () => {
  test('All buttons can be clicked', async () => {
    const handleMainClick = jest.fn();
    const handleStationClick = jest.fn();
    const handleGitHubClick = jest.fn();
    render(
      <Toolbar
        handleMainClick={handleMainClick}
        handleStationClick={handleStationClick}
        handleGitHubClick={handleGitHubClick}
      />,
    );
    const user = userEvent.setup();
    const homeButton = screen.getByRole('button', {
      name: 'Go to main page',
    });
    const stationButton = screen.getByRole('button', {
      name: 'Go to station list',
    });
    const githubButton = screen.getByRole('button', { name: 'github' });
    expect(homeButton).toBeDefined();
    await user.click(homeButton);
    expect(handleMainClick).toHaveBeenCalled();
    await user.click(stationButton);
    expect(handleStationClick).toHaveBeenCalled();
    await user.click(githubButton);
    expect(handleGitHubClick).toHaveBeenCalled();
  });
});
