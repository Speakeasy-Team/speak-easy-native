import tinycolor from "tinycolor2";

const variables = {
  backgroundColor: '#F5FCFF',
  darkenedBackgroundColor: tinycolor('#F5FCFF')
    .darken(2).desaturate(30).toString(),
  baseHeadingSize: 20,
  baseFontSize: 15,
  baseSpacing: 4,
  baseBorderWidth: .7,
  baseBorderColor: "#E8E8E8",
  baseBorderRadius: 5,
  navHeight: 64,
  boldFontWeight: "700",
}

export default variables;
