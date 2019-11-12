# Webpack loader
#### Template Url


Replace object url to require

```js
From
{
templateUrl: './index.html'
}
To
{
templateUrl: require('./index.html')
}
```

###  webpack
**install:**    npm i -D template-url-webpack
```js
{
	test: /\.js$/,
	loader:  'template-url-webpack',
	exclude: ['node_modules'],
	include: [path.resolve(__dirname, 'src')]
},
```