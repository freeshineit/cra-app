const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    // 配置babel插件
    plugins: [
      [
        // babel-plugin-import
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true // 加载less文件
        }
      ]
    ]
  },
  style: {
    postcss: {
      mode: "exclude",
      loaderOptions: {
        postcssOptions: {
          ident: "postcss",
          plugins: [
            [
              // https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin
              "postcss-px-to-viewport-8-plugin",
              {
                unitToConvert: "px", // 要转换的单位
                viewportWidth: 375, // 设计稿宽度
                unitPrecision: 5, // 保留小数点后几位
                propList: ["*"],
                viewportUnit: "vw",
                fontViewportUnit: "vw",
                selectorBlackList: ["body"], // 不需要转换的标签写入，比如body标签里的不希望转换的话
                minPixelValue: 1,
                mediaQuery: false,
                replace: true,
                exclude: [/node_modules/, /Web/, /assets/]
              }
            ]
          ]
        }
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "primary-color": "#1DA57A",
              "link-color": "#1DA57A",
              "border-radius-base": "2px"
              // 更改antd 默认的类名前缀
              // "@ant-prefix": "xxx"
            },
            javascriptEnabled: true // 允许less文件中使用js表达式
          }
        }
      }
    }
  ],
  webpack: {
    // .... 其他配置
    alias: {
      // 文件路径别名
      "@": path.resolve(__dirname, "src")
    }
  },
  devServer: {}
};
