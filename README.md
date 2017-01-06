# monobrow-react-pack

A monobrow config pack with some common react dependencies.

Configures your monobrow build with `babel` and `react` presets.

Includes the following libraries:

- classnames
- react
- react-dom
- redux
- react-redux

## Usage

To include in your project:

- `npm install -S monobrow-react-pack`
- add the pack to your monobrow config, eg:

```
// monobrow/config.js

module.exports = {
  entry: 'src/index.js',
  packs: [
    require('monobrow-react-pack')
  ]
}
```

## Development

If you want to try making changes or forking this, remember to run `npm run build` to rebundle the vendor files.

## License

MIT
