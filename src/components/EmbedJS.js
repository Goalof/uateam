import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
    var widgetOptions331723 = {
        bg_color: "transparent"
    };
    (function() {
        var a = document.createElement("script"), h = "head";
        a.async = true;
        a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=331723&t="+Math.floor(new Date()/18e5);
        document.getElementsByTagName(h)[0].appendChild(a)
    })(); 
`;
let mounted;

const EmbedJS = ({
	children,
	isOpen,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		if (!isOpen || mounted) return;
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
		mounted = true;
	}, [isOpen]);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});