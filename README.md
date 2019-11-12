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
**install:**    npm i -D style-url-webpack-as-string
```js
{
	test: /\.s?css$/,
	loader:  'style-url-webpack-as-string',
	exclude: ['node_modules'],
	include: [path.resolve(__dirname, 'src')]
},
```