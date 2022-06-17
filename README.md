# var-color-replace-loader

## 使用方式
```shell
npm i -D var-color-replace-loader
```

## 配置
```javascript
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
                    loader: path.resolve(__dirname, 'loaders/afterBabel'),
                    options: {
                        colorMap: {
                            '--color-cyan-1': '#f5f8ff',
                            '--color-emerald-7': '#049160',
                            '--color-indigo-5': '#41a7fa',
                        },
                    }
                },]
            },
```
假设 index.less 为
```less
body {
    width: 200px;
    height: 200px;
    background: #f5f8ff;color: #049160;border-color: #41a7fa;color: #adc;
}
```

会被替换为
```css
body {
    width: 200px;
    height: 200px;
    background: var(--color-cyan-1);color: var(--color-emerald-7);border-color: var(--color-indigo-5);color: #adc;
}
```