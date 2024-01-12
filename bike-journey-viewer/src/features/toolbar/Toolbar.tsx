import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export interface ToolBarProp {
  handleMainClick: () => void;
  handleStationClick: () => void;
  handleGitHubClick: () => void;
}
/**
 * Toolbar element. Provide navigation to the main page, station view, and
 * the GitHub page.
 */
export default function Toolbar(props: ToolBarProp): React.JSX.Element {
  const { handleMainClick, handleStationClick, handleGitHubClick } = props;

  return (
    <header className="flex w-full justify-between bg-blue-500 px-1 py-2 align-middle">
      <button
        className="w-fit bg-inherit p-0"
        type="button"
        onClick={handleMainClick}
        aria-label="Go to main page"
      >
        <h2 className="self-center font-semibold text-white">
          Journey Reviewer
        </h2>
      </button>
      <div>
        <button
          className="flex w-fit border-spacing-1 bg-inherit align-middle text-white hover:bg-blue-200 hover:text-gray-700"
          type="button"
          onClick={handleStationClick}
          aria-label="Go to station list"
        >
          <span className="material-symbols-outlined">pedal_bike</span>
          <span className="pl-2">Station</span>
        </button>
      </div>
      <div>
        <button
          className="w-fit self-center"
          type="button"
          aria-label="github"
          onClick={handleGitHubClick}
        >
          <FontAwesomeIcon icon={faSquareGithub} className="text-xl" />
        </button>
      </div>
    </header>
  );
}
