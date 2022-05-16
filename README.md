# ToDoApp (to-do-app)

This is a simple to-do-app with api mockup, based on quasar vue popular framework. It mocks successful and failed call api randomly.
I'm not a UX designer, so I focused on the logic of the application.

##What it misses:
It misses a login form, because it's supposed the user should be logged to perform api calls successful. This could be accomplished by (main features):
- Adding a LoginLayout that stores the token in the localStorage
- configuring Axios to use globally the token when it is set in the localstorage

## cp .env file
```bash
cp .env.example .env
```

edit the .env file if you want api calls to be called to a certain end-point instead of mocking up them. For example set API_BASE_URL to 'https://api.example.com'

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npx quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
npx quasar build
```

# License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
