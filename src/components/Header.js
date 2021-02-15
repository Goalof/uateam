import React from "react";
import { useOverrides, Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import { Image, Link, Text, Box, Icon } from "@quarkly/widgets";
import MobileSide from "./MobileSide";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
const defaultProps = {
	"id": "header",
	"className": "noprint",
	"quarkly-title": "Header",
	"padding": "0px 0px 0px 0px",
	"border-width": "0px 0px 2px 0px",
	"border-style": "solid",
	"border-color": "#dbe6f4",
	"transition": "all 400ms ease 0s",
	"lg-position": "fixed",
	"position": "fixed",
	"background": "#ffffff",
	"z-index": "99"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"margin": "0px 0px 0px 0px",
			"gap": "0px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"nout-width": "70%",
			"lg-width": "70%",
			"sm-width": "85%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "flex-start",
			"padding": "13px 30px 13px 30px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z",
			"color": "#ffffff",
			"width": "50px",
			"height": "50px",
			"margin": "3px 10px 3px 3px",
			"padding": "0px 0px 0px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 600 18px/50px 'AvenirNextCyrRegular', sans-serif",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"color": "#ffffff",
			"children": <Link href="https://ru.uteam.pro/" color="#000000" text-decoration-line="initial" font="500 18px/50px 'AvenirNextCyrMedium', sans-serif">
				Вакансии в России
			</Link>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif",
			"margin": "3px 0px 0px 12px",
			"display": "inline-block",
			"color": "#9BABBF",
			"nout-display": "none",
			"children": <Link
				href="http://ua.uteam.pro/"
				color="#9BABBF"
				text-decoration-line="initial"
				hover-color="#ffe02d"
				transition="color 0.2s ease 0s"
			>
				Вакансії в Україні{" "}
			</Link>
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif",
			"margin": "3px 0px 0px 12px",
			"display": "inline-block",
			"color": "#9BABBF",
			"nout-display": "none",
			"children": <Link
				href="http://en.uteam.pro/"
				color="#9BABBF"
				text-decoration-line="initial"
				hover-color="#ffe02d"
				transition="color 0.2s ease 0s"
			>
				Applying from overseas
			</Link>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"nout-width": "30%",
			"lg-width": "30%",
			"sm-width": "15%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"padding": "15px 30px 13px 30px",
			"justify-content": "flex-end"
		}
	},
	"mobileSide": {
		"kind": "MobileSide",
		"props": {
			"flex": "1 0 auto",
			"nout-position": "relative",
			"nout-z-index": "5",
			"nout-display": "flex",
			"nout-justify-content": "flex-end",
			"nout-align-items": "center",
			"display": "none",
			"nout-top": "0px"
		}
	},
	"mobileSideOverride": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"display": "flex",
			"align-items": "center",
			"nout-position": "fixed",
			"nout-top": 0,
			"nout-left": 0,
			"nout-z-index": "1",
			"nout-width": "100%",
			"nout-height": "100%",
			"nout-background": "white",
			"nout-flex-direction": "column"
		}
	},
	"mobileSideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Button",
			"display": "none",
			"nout-display": "flex",
			"nout-width": "33px",
			"nout-height": "28px",
			"nout-z-index": "6",
			"nout-top": "35px",
			"sm-margin": "-3px 0px 0px 0px"
		}
	},
	"mobileSideOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Button Line",
			"nout-background": "black",
			"nout-min-height": "3px",
			"border-radius": "6px",
			"nout-position": "absolute"
		}
	},
	"mobileSideOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1",
			"nout-top": "4px",
			"border-radius": "6px",
			"nout-width": "22px",
			"nout-right": "0px"
		}
	},
	"mobileSideOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2",
			"nout-top": "11px",
			"nout-border-radius": "6px",
			"nout-right": "0px"
		}
	},
	"mobileSideOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3",
			"nout-top": "18px",
			"nout-border-radius": "6px",
			"nout-right": "0px"
		}
	},
	"mobileSideOverride6": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1 :closed",
			"nout-width": "22px"
		}
	},
	"mobileSideOverride7": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2 :closed",
			"nout-width": "22px"
		}
	},
	"mobileSideOverride8": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3 :closed",
			"nout-width": "22px"
		}
	},
	"mobileSideOverride9": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2 :open",
			"nout-opacity": "0",
			"nout-width": "32px"
		}
	},
	"mobileSideOverride10": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1 :open",
			"nout-width": "36px",
			"nout-transform": "translateY(12px) rotate(225deg)"
		}
	},
	"mobileSideOverride11": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3 :open",
			"nout-width": "36px",
			"nout-transform": "translateY(-12px) rotate(135deg)"
		}
	},
	"mobileSideOverride12": {
		"kind": "Override",
		"props": {
			"slot": "Content :closed",
			"nout-opacity": "0",
			"nout-transition": "transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
			"nout-transform": "translateY(-100%)"
		}
	},
	"mobileSideOverride13": {
		"kind": "Override",
		"props": {
			"slot": "Content :open",
			"nout-transform": "translateY(0%)",
			"nout-transition": "transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
			"nout-opacity": "1"
		}
	},
	"mobileSideOverride14": {
		"kind": "Override",
		"props": {
			"slot": "Button :open",
			"nout-position": "fixed"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"nout-width": "100%",
			"nout-display": "flex",
			"nout-align-items": "center",
			"nout-padding": "0px 0px 0px 0px",
			"nout-margin": "0px 0px 0px 33px"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px",
			"nout-width": "50px",
			"nout-height": "50px",
			"src": "https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"flex": "0 0 auto",
			"margin": "0px 0px 0px 0px",
			"font": "--headline3",
			"nout-z-index": "6",
			"display": "none",
			"nout-display": "block",
			"nout-width": "90%",
			"nout-margin": "24px 0px 24px 12px",
			"nout-font": "normal 500 18px/42px 'AvenirNextCyrMedium', sans-serif",
			"children": "Вакансии в России"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"flex": "1 1 auto",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"nout-flex": "0 1 auto",
			"nout-flex-direction": "column",
			"nout-padding": "6px 6px 0px 6px",
			"nout-margin": "15px 0px 0px 0px"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"display": "none",
			"nout-display": "block"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"nout-text-decoration-line": "initial",
			"nout-font": "18px AvenirNextCyrRegular, sans-serif",
			"nout-letter-spacing": ".2px",
			"nout-padding": "0px 0px 0px 0px",
			"nout-color": "#263238"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"nout-padding": "15px 25px 15px 25px"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-index",
			"children": "Главная"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "70%",
			"display": "flex",
			"lg-width": "100%",
			"nout-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "flex-end",
			"padding": "13px 30px 14px 30px",
			"nout-flex-direction": "column",
			"nout-justify-content": "center",
			"nout-align-items": "center",
			"nout-padding": "0px 30px 0px 30px"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif",
			"margin": "3px 0px 0px 22px",
			"display": "inline-block",
			"color": "#9BABBF",
			"lg-margin": "10px 0px 0px 22px",
			"nout-padding": "15px 25px 15px 25px",
			"nout-margin": "0px 0px 0px 0px",
			"children": <Link
				href="http://en.uteam.pro/"
				color="#4a8cfa"
				text-decoration-line="initial"
				hover-color="#3d72cc"
				transition="color 0.2s ease 0s"
				font="300 14px/19px 'AvenirNextCyrMedium'"
				lg-padding="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
				nout-font="18px AvenirNextCyrRegular, sans-serif"
				nout-padding="0px 0px 0px 0px"
			>
				Careers for Foreigners
			</Link>
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif",
			"margin": "3px 0px 0px 22px",
			"display": "inline-block",
			"color": "#9BABBF",
			"lg-margin": "10px 0px 0px 22px",
			"nout-margin": "0px 0px 0px 0px",
			"nout-padding": "15px 25px 15px 25px",
			"children": <Link
				href="http://ua.uteam.pro/"
				color="#4a8cfa"
				text-decoration-line="initial"
				hover-color="#3d72cc"
				transition="color 0.2s ease 0s"
				font="300 14px/19px 'AvenirNextCyrMedium'"
				lg-padding="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
				nout-font="18px AvenirNextCyrRegular, sans-serif"
			>
				Вакансії в Україні{" "}
			</Link>
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "30%",
			"display": "flex",
			"lg-width": "100%",
			"nout-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"padding": "13px 30px 14px 30px",
			"justify-content": "flex-end",
			"lg-justify-content": "center",
			"nout-justify-content": "center",
			"nout-margin": "10px 0px 0px 0px"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://www.facebook.com/ucoz",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaVk,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "https://www.facebook.com/ucoz",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaFacebookF,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "https://twitter.com/ucoz_ru",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTwitter,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "https://instagram.com/ucoz_ru",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"href": "http://ok.ru/ucozru",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa",
			"nout-margin": "0px 0px 0px 0px"
		}
	},
	"icon4": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaOdnoklassniki,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"menu1": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"nout-display": "none"
		}
	},
	"menuOverride5": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	},
	"menuOverride6": {
		"kind": "Override",
		"props": {
			"slot": "link-index",
			"text-decoration-line": "initial",
			"children": "Главная"
		}
	},
	"menuOverride7": {
		"kind": "Override",
		"props": {
			"slot": "item-active",
			"color": "#4a8cfa"
		}
	},
	"menuOverride8": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "#4a8cfa"
		}
	},
	"menuOverride9": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"transition": "color 0.3s ease-in-out 0s",
			"font": "400 16px/24px 'AvenirNextCyrMedium'",
			"text-decoration-line": "initial",
			"color": "#263238",
			"hover-color": "#4a8cfa"
		}
	},
	"menuOverride10": {
		"kind": "Override",
		"props": {
			"slot": "link-uteam",
			"children": "uTeam"
		}
	},
	"menuOverride11": {
		"kind": "Override",
		"props": {
			"slot": "item-pr-menedzher",
			"display": "none"
		}
	},
	"menuOverride12": {
		"kind": "Override",
		"props": {
			"slot": "item-back-end-razrabotchik-php",
			"display": "none"
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="none" width="100%" />
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Box {...override("box")}>
					<Link {...override("link")}>
						<Image {...override("image")} />
					</Link>
					<Text {...override("text")} />
					<Text {...override("text1")} />
					<Text {...override("text2")} />
				</Box>
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<MobileSide {...override("mobileSide")}>
					<Override {...override("mobileSideOverride")} />
					<Override {...override("mobileSideOverride1")} />
					<Override {...override("mobileSideOverride2")} />
					<Override {...override("mobileSideOverride3")} />
					<Override {...override("mobileSideOverride4")} />
					<Override {...override("mobileSideOverride5")} />
					<Override {...override("mobileSideOverride6")} />
					<Override {...override("mobileSideOverride7")} />
					<Override {...override("mobileSideOverride8")} />
					<Override {...override("mobileSideOverride9")} />
					<Override {...override("mobileSideOverride10")} />
					<Override {...override("mobileSideOverride11")} />
					<Override {...override("mobileSideOverride12")} />
					<Override {...override("mobileSideOverride13")} />
					<Override {...override("mobileSideOverride14")} />
					<Box {...override("box1")}>
						<Image {...override("image1")} />
						<Text {...override("text3")} />
					</Box>
					<Menu {...override("menu")}>
						<Override {...override("menuOverride")} />
						<Override {...override("menuOverride1")} />
						<Override {...override("menuOverride2")} />
						<Override {...override("menuOverride3")} />
						<Override {...override("menuOverride4")} />
					</Menu>
					<StackItem {...override("stackItem2")}>
						<Override {...override("stackItemOverride2")} />
						{"        "}
						<Text {...override("text4")} />
						<Text {...override("text5")} />
					</StackItem>
					<StackItem {...override("stackItem3")}>
						<Override {...override("stackItemOverride3")} />
						<Link {...override("link1")}>
							<Icon {...override("icon")} />
						</Link>
						<Link {...override("link2")}>
							<Icon {...override("icon1")} />
						</Link>
						<Link {...override("link3")}>
							<Icon {...override("icon2")} />
						</Link>
						<Link {...override("link4")}>
							<Icon {...override("icon3")} />
						</Link>
						<Link {...override("link5")}>
							<Icon {...override("icon4")} />
						</Link>
						{"        "}
					</StackItem>
				</MobileSide>
				<Menu {...override("menu1")}>
					<Override {...override("menuOverride5")} />
					<Override {...override("menuOverride6")} />
					<Override {...override("menuOverride7")} />
					<Override {...override("menuOverride8")} />
					<Override {...override("menuOverride9")} />
					<Override {...override("menuOverride10")} />
					<Override {...override("menuOverride11")} />
					<Override {...override("menuOverride12")} />
				</Menu>
				{"        "}
			</StackItem>
			{"        "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;