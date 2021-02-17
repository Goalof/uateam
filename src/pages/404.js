import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"602d7555f92d7afdd8bf256a"}>
				{"* {\n    scroll-behavior: smooth;\n    }\n    .active .fileText {\n    display: none;\n    }\n    input.fileText {\n        opacity: 1 !important;\n    }\n    * {\n      -webkit-tap-highlight-color: transparent!important;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrRegular';\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot');\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrMedium';\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot');\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrBold';\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot');\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrDemi';\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Demi.otf');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    body {\n      font-family: 'AvenirNextCyrRegular', sans-serif;\n      font-weight: normal;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});