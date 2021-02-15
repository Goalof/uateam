import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Text, Image, Icon, Link } from "@quarkly/widgets";
import { AiOutlinePrinter } from "react-icons/ai";
const defaultProps = {
	"className": "noprint",
	"width": "100%"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"className": "noprint",
			"font": "normal 600 14px/20px 'AvenirNextCyrRegular', sans-serif",
			"margin": "0px 12px 0px 0px",
			"color": "#58646f",
			"display": "none",
			"children": "Поделиться"
		}
	},
	"div": {
		"kind": "div",
		"props": {
			"id": "uSocial",
			"data-pid": "aaca2594cc537c9273395c0236d5cd14",
			"data-type": "share",
			"data-options": "round,style1,absolute,horizontal,size48,eachCounter0,counter0,nomobile",
			"data-social": "vk,fb,ok"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"className": "noprint",
			"src": "https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/mdash.png?v=2021-02-04T00:43:50.126Z",
			"width": "36px",
			"height": "1px",
			"margin": "0px 12px 0px 0px",
			"display": "none"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"className": "noprint",
			"href": "javascript:(print());",
			"display": "flex",
			"align-items": "center",
			"color": "#58646f",
			"text-decoration-line": "initial",
			"font": "normal 600 14px/20px 'AvenirNextCyrRegular', sans-serif",
			"hover-color": "#4a8cfa",
			"transition": "color 0.2s ease 0s"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "ai",
			"icon": AiOutlinePrinter,
			"margin": "0px 0px 0px 10px",
			"color": "inherit"
		}
	}
};

const SocialPrint = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" align-items="center" />
		<Text {...override("text")} />
		<div {...override("div")} />
		<Image {...override("image")} />
		<Link {...override("link")}>
			Распечатать вакансию
			<Icon {...override("icon")} />
		</Link>
		{children}
	</StackItem>;
};

Object.assign(SocialPrint, { ...StackItem,
	defaultProps,
	overrides
});
export default SocialPrint;