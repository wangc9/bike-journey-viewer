# Changelog
Note: "*" indicates that the commit link is a placeholder. The corresponding link will be updated in the next commit.


## v0.1.2

### Features
- [`ba7464d`](https://github.com/wangc9/bike-journey-viewer/commit/ba7464d2148550111b3dc2a14c9daecdcde3e53f)* Update CI pipeline to enable actions on pull requests.


## v0.1.1

### Features
- [`ba7464d`](https://github.com/wangc9/bike-journey-viewer/commit/ba7464d2148550111b3dc2a14c9daecdcde3e53f) Add simple list view for stations.
	- The name of each stations are displayed in the list.
	- Unit tests are included to mock and test the `StationList` component.

### Bug fixes
- [`fea2984`](https://github.com/wangc9/bike-journey-viewer/commit/fea29847bb2ef9d21d40541d74ba03b7a33b9480)* Solve exhaustive-deps issue in `StationList`.


## v0.1.0

### Features
- [`64b10b4`](https://github.com/wangc9/bike-journey-viewer/commit/64b10b40f839944be752074c972d0fd6f98c6ea5) Add service to retrieve station information into the frontend.
	- Given the page number, stations' information are returned as an array using `getAll` function.
	- Unit tests are included to mock and test the function.

### Bug fixes
- [`64b10b4`](https://github.com/wangc9/bike-journey-viewer/commit/64b10b40f839944be752074c972d0fd6f98c6ea5) Fix typo in `Toolbar` unit test.


## v0.0.14

### Bug fixes
- [`e4652cc`](https://github.com/wangc9/bike-journey-viewer/commit/e4652cc97c79f20d6e373af273c51aae1625b199) Extend error response to cover empty array scenario.
	- If no station information is found, return error message `No station found` instead of returning an empty array.


## v0.0.13

### Features
- [`8d3b49c`](https://github.com/wangc9/bike-journey-viewer/commit/8d3b49c4fcf0d5685e40bfe5aa764951eed39f5a) Add navigation to frontend.
	- `Tailwindcss` is configured for styling.
	- React Router is used for navigation.
	- `Toolbar` component is added. The component contains three button: "Journey Viewer" home page button, "Station" button for viewing station lists, and GitHub button linking to the GitHub repo.
	- `jest`, `ts-jest`, `react testing library` are configured for testing.
	- Unit tests are added for the `Toolbar` component.


## v0.0.12

### Features
- [`d95a7ad`](https://github.com/wangc9/bike-journey-viewer/commit/d95a7adeeeee6855688de566b37b9f351295664b) Add pagination to `stations` controller.
	- Pagination can be activated through `/api/stations/?page=` when retrieving multiple station information starting from page 0. If page number is not provided, all stations will be returned as usual.
	- Unit tests are updated to test the logic of pagination.


## v0.0.11

### Features
- [`e522341`](https://github.com/wangc9/bike-journey-viewer/commit/e522341179aecc22c7b0fd654defa3424bc9b822) Add new return information to `stationRouter`.
	- Calculation of count and average distance is moved to a separate `stationService`
	- The new calculation can now calculate four different scenarios: calculate all non-null journeys, all journeys covering more than 10 meters, all journeys lasting for more than 10 seconds, and all journeys both covering more than 10 meters and lasting for more than 10 seconds. All results are now returned together through `/api/stations/:id`.
	- Unit tests stay the same at the moment. Note: The unit test suite does not include tests for irregular journeys. The tests might be added later as the current database does not contain such entries.


## v0.0.10

### Bug fixes
- [`fea2984`](https://github.com/wangc9/bike-journey-viewer/commit/fea29847bb2ef9d21d40541d74ba03b7a33b9480) Change type definition for `Station` and `Journey` model.
	- `null` type is added for all fields with `NULL` property.
	- All fields are changed to be defined.
	- Unit tests are changed according to the new model.


## v0.0.9

### Features
- [`8e8cf68`](https://github.com/wangc9/bike-journey-viewer/commit/8e8cf6ba461f4e838c5a0ccd2a2593b64d1ce613) Add controllers for `Station`-related data handling.
	- Station info, along with the calculation of the count and average distance of journeys starting and terminating at the station respectively can be retrieved through `/api/stations/:id`.
	- Unit tests are added for the controller to test its logic.


## v0.0.8

### Bug fixes
- [`0692b79`](https://github.com/wangc9/bike-journey-viewer/commit/0692b79b5eb17b60c4faada9c35f487d7befeee7) Add foreign key definition in `Journey` model.


## v0.0.7

### Features
- [`c5568bb`](https://github.com/wangc9/bike-journey-viewer/commit/c5568bb72a7e34a96cc086c042c7fc4c0f9a7dd9) Add controllers for `Journey`-related data handling.
	-  Journey info, along with the info for its departing station and destination station respectively can be retrieved through `/api/journeys/:id`.


## v0.0.6

### Features
- [`659bb0a`](https://github.com/wangc9/bike-journey-viewer/commit/659bb0a89f9e9664764802dd391dc0c98c3919f5) Add relations between `Journey` model and `Station` model.


## v0.0.5

### Features
- [`62323a0`](https://github.com/wangc9/bike-journey-viewer/commit/62323a047d99651aebcdb50a5e35e501f46ab64b) Add `Journey` model.


## v0.0.4

### Features
- [`9fdd5f6`](https://github.com/wangc9/bike-journey-viewer/commit/9fdd5f6aac53e04adb5c2a0803cd4e305b269d96) Add `Station` model.


## v0.0.3

### Chores
- [`c242b66`](https://github.com/wangc9/bike-journey-viewer/commit/c242b6606d27eb8d5dbc482e34b1677e72ceed01) Refactor environment variable configuration and database connection to separate files in `utils`.


## v0.0.2

### Features
- [`d524ba1`](https://github.com/wangc9/bike-journey-viewer/commit/d524ba1a79a60d6c7979277758f081efecb913ca) Add PostgreSQL database for backend data source. Use `sequelize` for database connection.

### Chores

- [`d524ba1`](https://github.com/wangc9/bike-journey-viewer/commit/d524ba1a79a60d6c7979277758f081efecb913ca) Update dependencies and scripts in backend `package.json`.
	- Add `pg` and `sequelize` for database connection.
	- Add `typedoc` for code documentation.
	- Add `start` and `dev` scripts with different environments.


## v0.0.1

### Features
- [`ae23020`](https://github.com/wangc9/bike-journey-viewer/commit/ae23020848e319661df4b10834bb82260ae9940c) Setup project to use TypeScript, React, Express, Node, Prettier, and Eslint. Add initial CI pipeline.
