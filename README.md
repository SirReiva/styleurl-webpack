# Webpack loader
#### Style Url


Replace object url to require

```js
From
{
styleUrl: './index.css'
}
To
{
styleUrl: import './index.css'
}
```

###  webpack
**install:**    npm i -D style-url-webpack
```js
{
	test: /\.s?css$/,
	loader:  'style-url-webpack',
	exclude: ['node_modules'],
	include: [path.resolve(__dirname, 'src')]
},
```